/**
 * App.tsx — Root component.
 *
 * Reads authState from WeeiiProvider context:
 *   'pending'         → waiting for session-resume response (shows spinner)
 *   'unauthenticated' → no valid session                    (shows LoginPage)
 *   'authenticated'   → session resumed successfully        (shows TicketsPage)
 */
import { useWeeiiContext } from '@weeii/sdk/react';
import type { Sesion } from '@weeii/sdk/sesion';
import { ConnectionBanner } from './components/ConnectionBanner.tsx';
import { LoginPage }        from './pages/LoginPage.tsx';
import { TicketsPage }      from './pages/TicketsPage.tsx';

interface AppProps {
  usuario:  Sesion | null;
  onLogin:  (sesion: Sesion) => void;
  onLogout: () => void;
}

export function App({ usuario, onLogin, onLogout }: AppProps) {
  const { authState } = useWeeiiContext();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 720, margin: '0 auto', padding: 16 }}>
      {/* Always-visible connection indicator */}
      <ConnectionBanner />

      {/* Waiting for the session-resume response */}
      {authState === 'pending' && (
        <p style={{ color: '#888', marginTop: 32 }}>Iniciando sesión…</p>
      )}

      {/* Unauthenticated */}
      {authState !== 'pending' && !usuario && (
        <LoginPage onLogin={onLogin} />
      )}

      {/* Authenticated */}
      {authState !== 'pending' && usuario && (
        <TicketsPage usuario={usuario} onLogout={onLogout} />
      )}
    </div>
  );
}
