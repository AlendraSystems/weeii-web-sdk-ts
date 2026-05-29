/**
 * useAuth.tsx — login / logout helpers.
 *
 * The Weeii login flow is two steps:
 *   1. Enter phone → iniciarSesionConTelefono sends an OTP via SMS.
 *      The server responds NEUTRO immediately (processing) then OK once the
 *      SMS is dispatched. useWeeiiAsyncMutation surfaces both phases.
 *   2. Enter OTP   → confirmarSesion validates the code and returns a Sesion.
 *      (Token persistence is handled automatically inside confirmarSesion.)
 *
 * Logout: terminarSesion() invalidates the server session and clears the token.
 */
import { useRef, useCallback } from 'react';
import { useWeeiiAsyncMutation } from '@silasdevs/sdk/react';
import {
  iniciarSesionConTelefono,
  confirmarSesion,
  terminarSesion,
} from '@silasdevs/sdk/sesion';
import type { Sesion } from '@silasdevs/sdk/sesion';

// ---------------------------------------------------------------------------
// Step 1 — request OTP
// ---------------------------------------------------------------------------

interface UseRequestOTPOptions {
  onSuccess:    (telefono: string, idSesion: number) => void;
  onProcessing?: () => void;
  onError:      (description: string) => void;
}

export function useRequestOTP({ onSuccess, onProcessing, onError }: UseRequestOTPOptions) {
  // Capture the phone number so onSuccess can echo it back to the caller.
  const telefonoRef = useRef('');

  const { mutate: _mutate, isLoading, isProcessing } = useWeeiiAsyncMutation(
    iniciarSesionConTelefono,
    {
      onInterim: () => onProcessing?.(),
      onSuccess: (msg) => onSuccess(telefonoRef.current, msg.data.id_sesion),
      onError: (err) => {
        const e = err as { description?: string };
        onError(e.description ?? 'Error al enviar código');
      },
    },
  );

  const mutate = useCallback(
    ({ telefono }: { telefono: string }) => {
      telefonoRef.current = telefono;
      _mutate({ telefono });
    },
    [_mutate],
  );

  return { mutate, isLoading, isProcessing };
}

// ---------------------------------------------------------------------------
// Step 2 — confirm OTP
// ---------------------------------------------------------------------------

interface UseConfirmOTPOptions {
  onSuccess:    (sesion: Sesion) => void;
  onProcessing?: () => void;
  onError:      (description: string) => void;
}

export function useConfirmOTP({ onSuccess, onProcessing, onError }: UseConfirmOTPOptions) {
  return useWeeiiAsyncMutation(
    confirmarSesion,
    {
      onInterim: () => onProcessing?.(),
      onSuccess: (msg) => {
        // Token is already persisted inside confirmarSesion.
        onSuccess(msg.data.sesion);
      },
      onError: (err) => {
        const e = err as { description?: string };
        onError(e.description ?? 'Código incorrecto');
      },
    },
  );
}

// ---------------------------------------------------------------------------
// Logout
// ---------------------------------------------------------------------------

interface UseLogoutOptions {
  onSuccess: () => void;
}

export function useLogout({ onSuccess }: UseLogoutOptions) {
  return useWeeiiAsyncMutation(
    (_params, callback) => terminarSesion(callback),
    {
      // clearSession() is called automatically inside terminarSesion.
      onSuccess: () => onSuccess(),
    },
  );
}
