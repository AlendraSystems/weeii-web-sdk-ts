/**
 * useWeeiiConnection — tracks the WebSocket connection state.
 *
 * Returns the current connection status so components can show a
 * reconnecting banner, disable the UI, etc.
 *
 * ```tsx
 * const { connected, reconnecting } = useWeeiiConnection();
 * ```
 */
import { useEffect, useState } from 'react';
import { getTransport } from '../transport.js';

export type ConnectionStatus = 'connecting' | 'connected' | 'disconnected' | 'reconnecting';

export interface UseWeeiiConnectionResult {
  status:       ConnectionStatus;
  connected:    boolean;
  reconnecting: boolean;
}

export function useWeeiiConnection(): UseWeeiiConnectionResult {
  const [status, setStatus] = useState<ConnectionStatus>('connecting');

  useEffect(() => {
    const transport = getTransport();

    const offOpen    = transport.on('connected',    () => setStatus('connected'));
    const offClose   = transport.on('disconnected', () => setStatus('disconnected'));
    const offReconn  = transport.on('reconnecting', () => setStatus('reconnecting'));

    // Sync with current state on mount
    transport.connect();

    return () => {
      offOpen();
      offClose();
      offReconn();
    };
  }, []);

  return {
    status,
    connected:    status === 'connected',
    reconnecting: status === 'reconnecting',
  };
}
