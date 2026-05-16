/**
 * LoginPage.tsx
 *
 * Two-step login form:
 *   Step 1 — enter phone number → server sends OTP via SMS.
 *   Step 2 — enter OTP code    → server returns Sesion + saves token.
 *
 * Demonstrates useRequestOTP + useConfirmOTP from useAuth.tsx.
 */
import { useState }    from 'react';
import type { Sesion }  from '@weeii/sdk/sesion';
import { useRequestOTP, useConfirmOTP } from '../hooks/useAuth.tsx';

interface LoginPageProps {
  onLogin: (sesion: Sesion) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  // 'phone' | 'otp'
  const [step, setStep]         = useState<'phone' | 'otp'>('phone');
  const [telefono, setTelefono] = useState('');
  const [codigo, setCodigo]     = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const { mutate: requestOTP, isLoading: sending } = useRequestOTP({
    onSuccess: (tel) => { setTelefono(tel); setStep('otp'); setErrorMsg(''); },
    onError:   setErrorMsg,
  });

  const { mutate: confirmOTP, isLoading: confirming } = useConfirmOTP({
    onSuccess: onLogin,
    onError:   setErrorMsg,
  });

  function handlePhoneSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg('');
    requestOTP({ telefono });
  }

  function handleOTPSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg('');
    confirmOTP({ codigo, telefono });
  }

  return (
    <div style={{ marginTop: 64, maxWidth: 360 }}>
      <h1 style={{ fontSize: 22, marginBottom: 24 }}>Iniciar sesión</h1>

      {step === 'phone' ? (
        <form onSubmit={handlePhoneSubmit} style={formStyle}>
          <label>
            Teléfono
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="5512345678"
              required
              style={inputStyle}
            />
          </label>
          {errorMsg && <p role="alert" style={errorStyle}>{errorMsg}</p>}
          <button type="submit" disabled={sending} style={btnStyle}>
            {sending ? 'Enviando código…' : 'Enviar código SMS'}
          </button>
        </form>
      ) : (
        <form onSubmit={handleOTPSubmit} style={formStyle}>
          <p style={{ fontSize: 14, color: '#555', margin: '0 0 12px' }}>
            Se envió un código a <strong>{telefono}</strong>.
          </p>
          <label>
            Código de verificación
            <input
              type="text"
              inputMode="numeric"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="123456"
              required
              style={inputStyle}
            />
          </label>
          {errorMsg && <p role="alert" style={errorStyle}>{errorMsg}</p>}
          <button type="submit" disabled={confirming} style={btnStyle}>
            {confirming ? 'Verificando…' : 'Verificar'}
          </button>
          <button
            type="button"
            onClick={() => { setStep('phone'); setCodigo(''); setErrorMsg(''); }}
            style={{ ...btnStyle, background: 'transparent', color: '#3b82f6', border: '1px solid #3b82f6', marginTop: 0 }}
          >
            Cambiar número
          </button>
        </form>
      )}
    </div>
  );
}

const formStyle: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', gap: 12,
};

const inputStyle: React.CSSProperties = {
  display:      'block',
  width:        '100%',
  marginTop:    4,
  padding:      '8px 10px',
  border:       '1px solid #ccc',
  borderRadius:  6,
  fontSize:      15,
  boxSizing:    'border-box',
};

const errorStyle: React.CSSProperties = {
  color: '#ef4444', fontSize: 14, margin: 0,
};

const btnStyle: React.CSSProperties = {
  padding:      '10px 0',
  background:   '#3b82f6',
  color:        '#fff',
  border:       'none',
  borderRadius:  6,
  fontSize:      15,
  cursor:        'pointer',
};
