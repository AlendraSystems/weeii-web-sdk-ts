/**
 * WeeiiProvider — top-level SDK bootstrap component.
 *
 * Initialises the SDK once on mount, connects to the WebSocket server,
 * attempts session resumption, and exposes connection + auth state to the
 * entire component tree via React context.
 *
 * Usage:
 * ```tsx
 * <WeeiiProvider
 *   config={{ url: import.meta.env.VITE_WS_URL, onAlert: showToast, onError: showError }}
 *   onSession={(msg) => setUsuario(msg.data.sesion)}
 *   onNoSession={() => navigate('/login')}
 *   onFailed={() => navigate('/login')}
 * >
 *   <App />
 * </WeeiiProvider>
 * ```
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { configureWeeii } from '../config.js';
import { conectarYResumir } from '../connect.js';
import { getTransport } from '../transport.js';
import type { WeeiiConfig } from '../config.js';
import type { WeeiiIncomingMessage } from '../api.js';
import type { Sesion } from '../modules/sesion/types.js';
import type { ConnectionStatus } from './useWeeiiConnection.js';

// ─────────────────────────────────────────────────────────────────────────────
// Auth state
// ─────────────────────────────────────────────────────────────────────────────

export type AuthState = 'pending' | 'authenticated' | 'unauthenticated';

// ─────────────────────────────────────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────────────────────────────────────

export interface WeeiiContextValue {
  /** WebSocket connection status. */
  status: ConnectionStatus;
  /** True when the socket is open and ready. */
  connected: boolean;
  /** True while attempting to reconnect. */
  reconnecting: boolean;
  /** Session / auth state. `'pending'` until the resume attempt completes. */
  authState: AuthState;
}

const WeeiiContext = createContext<WeeiiContextValue | null>(null);

// ─────────────────────────────────────────────────────────────────────────────
// Provider
// ─────────────────────────────────────────────────────────────────────────────

export interface WeeiiProviderProps {
  /** SDK configuration — passed to `configureWeeii()` on mount. */
  config: WeeiiConfig;
  /**
   * Called when the server accepted a session resume.
   * Use this to update your auth store / set the current user.
   */
  onSession?: (msg: WeeiiIncomingMessage<{ sesion: Sesion }>) => void;
  /** Called when there is no stored token to resume. */
  onNoSession?: () => void;
  /** Called when the server rejected the stored token. */
  onFailed?: () => void;
  children: ReactNode;
}

export function WeeiiProvider({
  config,
  onSession,
  onNoSession,
  onFailed,
  children,
}: WeeiiProviderProps): React.JSX.Element {
  
  const [status, setStatus]       = useState<ConnectionStatus>('connecting');
  const [authState, setAuthState] = useState<AuthState>('pending');

  // Stable refs so the connection effect doesn't re-run when callbacks change.
  const onSessionRef   = useRef(onSession);
  const onNoSessionRef = useRef(onNoSession);
  const onFailedRef    = useRef(onFailed);
  onSessionRef.current   = onSession;
  onNoSessionRef.current = onNoSession;
  onFailedRef.current    = onFailed;

  const handleSession = useCallback(
    (msg: WeeiiIncomingMessage<{ sesion: Sesion }>) => {
      setAuthState('authenticated');
      onSessionRef.current?.(msg);
    },
    [],
  );

  const handleNoSession = useCallback(() => {
    setAuthState('unauthenticated');
    onNoSessionRef.current?.();
  }, []);

  const handleFailed = useCallback(() => {
    setAuthState('unauthenticated');
    onFailedRef.current?.();
  }, []);

  useEffect(() => {
    // configureWeeii is idempotent — safe to call even if already configured.
    configureWeeii(config);

    const transport = getTransport();

    const offConnected    = transport.on('connected',    () => setStatus('connected'));
    const offDisconnected = transport.on('disconnected', () => setStatus('disconnected'));
    const offReconnecting = transport.on('reconnecting', () => setStatus('reconnecting'));

    conectarYResumir({
      onSession:   handleSession,
      onNoSession: handleNoSession,
      onFailed:    handleFailed,
    });

    return () => {
      offConnected();
      offDisconnected();
      offReconnecting();
    };
    // config is intentionally excluded — configureWeeii is a one-time setup.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: WeeiiContextValue = {
    status,
    connected:    status === 'connected',
    reconnecting: status === 'reconnecting',
    authState,
  };

  return (
    <WeeiiContext.Provider value={value}>
      {children}
    </WeeiiContext.Provider>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Access the Weeii connection and auth state from any component inside
 * `<WeeiiProvider>`.
 *
 * Throws if called outside the provider.
 */
export function useWeeiiContext(): WeeiiContextValue {
  const ctx = useContext(WeeiiContext);
  if (ctx === null) {
    throw new Error('[weeii/sdk] useWeeiiContext() must be used inside <WeeiiProvider>.');
  }
  return ctx;
}
