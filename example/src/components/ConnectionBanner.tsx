/**
 * ConnectionBanner.tsx
 *
 * Displays a non-intrusive banner when the WebSocket is reconnecting or
 * fully disconnected. Uses useWeeiiContext() — must be inside <WeeiiProvider>.
 */
import { useWeeiiContext } from '@weeii/sdk/react';

export function ConnectionBanner() {
  const { status } = useWeeiiContext();

  if (status === 'connected' || status === 'connecting') return null;

  const isReconnecting = status === 'reconnecting';

  return (
    <div
      role="status"
      style={{
        position:   'fixed',
        top:        0,
        left:       0,
        right:      0,
        padding:    '8px 16px',
        background: isReconnecting ? '#f59e0b' : '#ef4444',
        color:      '#fff',
        fontSize:   13,
        textAlign:  'center',
        zIndex:     9999,
      }}
    >
      {isReconnecting
        ? '⟳  Reconectando con el servidor…'
        : '✕  Sin conexión al servidor'}
    </div>
  );
}
