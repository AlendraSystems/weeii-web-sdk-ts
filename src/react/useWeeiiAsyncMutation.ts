/**
 * useWeeiiAsyncMutation — mutation hook for operations that emit a NEUTRO
 * (interim/processing) response before the final one.
 *
 * Unlike `useWeeiiMutation`, which is Promise-based and hides interim messages,
 * this hook exposes an `isProcessing` flag and an `onInterim` callback so the
 * UI can react (e.g. show a progress indicator) while the server is working.
 *
 * ```tsx
 * const { mutate, isLoading, isProcessing, data, error } =
 *   useWeeiiAsyncMutation(pagarConSaldo, {
 *     onInterim: () => setLabel('Procesando pago…'),
 *     onSuccess: (msg) => toast('Pago exitoso'),
 *     onError:   (err) => toast('Error en el pago'),
 *   });
 *
 * <button onClick={() => mutate({ monto: 100 })}>Pagar</button>
 * ```
 */
import { useState, useCallback, useRef } from 'react';
import type { WeeiiIncomingMessage, WeeiiFireCallback } from '../api.js';
import { getTransport } from '../transport.js';

// ─────────────────────────────────────────────────────────────────────────────

export interface UseWeeiiAsyncMutationOptions<BData> {
  onInterim?: (msg: WeeiiIncomingMessage<BData>) => void;
  onSuccess?: (msg: WeeiiIncomingMessage<BData>) => void;
  onError?:   (err: unknown) => void;
}

export interface UseWeeiiAsyncMutationResult<BData, PData> {
  /** Fire and forget — does not throw. */
  mutate:       (data?: PData) => void;
  /** Returns a Promise that resolves on the final OK response or rejects on error. */
  mutateAsync:  (data?: PData) => Promise<WeeiiIncomingMessage<BData>>;
  /** True from the moment the request is sent until the final response arrives. */
  isLoading:    boolean;
  /** True after a NEUTRO message while still waiting for the final response. */
  isProcessing: boolean;
  data:         WeeiiIncomingMessage<BData> | undefined;
  error:        unknown;
  reset:        () => void;
}

// ─────────────────────────────────────────────────────────────────────────────

export function useWeeiiAsyncMutation<
  BData = Record<string, unknown>,
  PData extends object = object,
>(
  fireFn: (params: PData, callback: WeeiiFireCallback<BData>) => () => void,
  options: UseWeeiiAsyncMutationOptions<BData> = {},
): UseWeeiiAsyncMutationResult<BData, PData> {
  const [isLoading,    setIsLoading]    = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [data,         setData]         = useState<WeeiiIncomingMessage<BData>>();
  const [error,        setError]        = useState<unknown>();

  // Keep a ref to the latest options so callbacks never go stale.
  const optsRef = useRef(options);
  optsRef.current = options;

  // Holds the unsubscribe fn for the active fire() call.
  const unsubRef = useRef<(() => void) | null>(null);

  // ── shared handler builder ──────────────────────────────────────────────
  const buildCallback = useCallback(
    (
      resolve?: (msg: WeeiiIncomingMessage<BData>) => void,
      reject?:  (err: unknown) => void,
    ) =>
      (msg: WeeiiIncomingMessage<BData>): boolean | void => {
        if (msg.isInterim) {
          setIsProcessing(true);
          optsRef.current.onInterim?.(msg);
          return false; // keep listening
        }

        // Final response — determine success vs error using the protocol codes.
        const codes = getTransport().protocol.codes;
        const isSuccess = !codes?.success || msg.code === codes.success;

        setIsLoading(false);
        setIsProcessing(false);

        if (isSuccess) {
          setData(msg);
          optsRef.current.onSuccess?.(msg);
          resolve?.(msg);
        } else {
          const err = { code: msg.code, description: msg.description, data: msg.data };
          setError(err);
          optsRef.current.onError?.(err);
          reject?.(err);
        }
      },
    [],
  );

  // ── mutate ──────────────────────────────────────────────────────────────
  const mutate = useCallback(
    (params?: PData) => {
      unsubRef.current?.();
      setIsLoading(true);
      setIsProcessing(false);
      setError(undefined);

      unsubRef.current = fireFn(params ?? {} as PData, buildCallback());
    },
    [fireFn, buildCallback],
  );

  // ── mutateAsync ─────────────────────────────────────────────────────────
  const mutateAsync = useCallback(
    (params?: PData): Promise<WeeiiIncomingMessage<BData>> =>
      new Promise<WeeiiIncomingMessage<BData>>((resolve, reject) => {
        unsubRef.current?.();
        setIsLoading(true);
        setIsProcessing(false);
        setError(undefined);

        unsubRef.current = fireFn(params ?? {} as PData, buildCallback(resolve, reject));
      }),
    [fireFn, buildCallback],
  );

  // ── reset ───────────────────────────────────────────────────────────────
  const reset = useCallback(() => {
    unsubRef.current?.();
    unsubRef.current = null;
    setIsLoading(false);
    setIsProcessing(false);
    setData(undefined);
    setError(undefined);
  }, []);

  return { mutate, mutateAsync, isLoading, isProcessing, data, error, reset };
}
