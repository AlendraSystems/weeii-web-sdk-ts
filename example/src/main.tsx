/**
 * main.tsx — App entry point.
 *
 * Bootstrap order:
 *   1. ReactDOM.createRoot
 *   2. <WeeiiProvider>  — calls configureWeeii, opens WebSocket, attempts resume
 *   3. onSession / onNoSession  — updates `usuario` state
 *
 * Auth-ready state is read from WeeiiProvider via useWeeiiContext().authState
 * inside App.tsx — no need to duplicate it here.
 */
import { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { WeeiiProvider } from '@silasdevs/sdk/react';
import type { WeeiiIncomingMessage } from '@silasdevs/sdk';
import type { Sesion } from '@silasdevs/sdk/sesion';
import { App } from './App.tsx';

// ---------------------------------------------------------------------------
// Root wrapper: manages the current user, delegates auth-ready to WeeiiProvider.
// ---------------------------------------------------------------------------

function Root() {
  const [usuario, setUsuario] = useState<Sesion | null>(null);
  
  return (
    <WeeiiProvider
      config={{
        url:      import.meta.env.VITE_WS_URL as string,
        env:      'development',
        debug:    true,
        onAlert:  (d) => console.info('[alert]', d),
        onError:  (d) => console.error('[server error]', d),
      }}
      onSession={(msg: WeeiiIncomingMessage<{ sesion: Sesion }>) => setUsuario(msg.data.sesion)}
      onNoSession={() => setUsuario(null)}
      onFailed={() => setUsuario(null)}
    >
      <App
        usuario={usuario}
        onLogin={setUsuario}
        onLogout={() => setUsuario(null)}
      />
    </WeeiiProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
