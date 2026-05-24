/**
 * useAuth.tsx — login / logout helpers.
 *
 * The Weeii login flow is two steps:
 *   1. Enter phone → iniciarSesionConTelefono sends an OTP via SMS.
 *   2. Enter OTP   → confirmarSesion validates the code and returns a Sesion.
 *      (Token persistence is handled automatically inside confirmarSesion.)
 *
 * Logout: terminarSesion() invalidates the server session and clears the token.
 */
import { useWeeiiMutation } from '@weeii/sdk/react';
import {
  iniciarSesionConTelefono,
  confirmarSesion,
  terminarSesion,
} from '@weeii/sdk/sesion';
import type { Sesion } from '@weeii/sdk/sesion';
import type { WeeiiIncomingMessage } from '@weeii/sdk';

// ---------------------------------------------------------------------------
// Step 1 — request OTP
// ---------------------------------------------------------------------------

interface UseRequestOTPOptions {
  onSuccess: (telefono: string) => void;
  onError:   (description: string) => void;
}

export function useRequestOTP({ onSuccess, onError }: UseRequestOTPOptions) {
  return useWeeiiMutation(
    ({ telefono }: { telefono: string }) =>
      iniciarSesionConTelefono({ telefono }),
    {
      onSuccess: (_msg, { telefono }) => {
        console.log(344);
        // Server sent an SMS — advance to code-entry step.
        onSuccess(telefono);
        console.log('123');
      },
      onError: (err) => {
        const e = err as { description?: string };
        onError(e.description ?? 'Error al enviar código');
      },
    },
  );
}

// ---------------------------------------------------------------------------
// Step 2 — confirm OTP
// ---------------------------------------------------------------------------

interface UseConfirmOTPOptions {
  onSuccess: (sesion: Sesion) => void;
  onError:   (description: string) => void;
}

export function useConfirmOTP({ onSuccess, onError }: UseConfirmOTPOptions) {
  return useWeeiiMutation(
    ({ codigo, telefono }: { codigo: string; telefono: string }) =>
      confirmarSesion({ codigo, telefono }),
    {
      onSuccess: (msg: WeeiiIncomingMessage<{ sesion: Sesion }>) => {
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
  return useWeeiiMutation(
    () => terminarSesion(),
    {
      // clearSession() is called automatically inside terminarSesion.
      onSuccess: () => onSuccess(),
    },
  );
}
