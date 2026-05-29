/**
 * TicketsPage.tsx
 *
 * Main page shown to authenticated users.
 * Demonstrates:
 *   - Reading session data passed as a prop
 *   - useWeeiiQuery to load data on mount
 *   - Composing child components that each handle one responsibility
 */
import type { Sesion } from '@silasdevs/sdk/sesion';
import { useLogout }           from '../hooks/useAuth.tsx';
import { CreateTicketForm }    from '../components/CreateTicketForm.tsx';
import { TicketList }          from '../components/TicketList.tsx';

interface TicketsPageProps {
  usuario:  Sesion;
  onLogout: () => void;
}

export function TicketsPage({ usuario, onLogout }: TicketsPageProps) {
  const { mutate: logout, isLoading: loggingOut } = useLogout({
    onSuccess: onLogout,
  });

  return (
    <div>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 20, margin: 0 }}>Tickets de soporte</h1>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: '#666' }}>
            {(usuario as unknown as { nombre?: string }).nombre ?? 'Usuario'}
          </span>
          <button onClick={() => logout()} disabled={loggingOut} style={btnOutlineStyle}>
            {loggingOut ? 'Cerrando…' : 'Cerrar sesión'}
          </button>
        </div>
      </header>

      {/* Create form */}
      <section style={{ marginBottom: 32, padding: 16, border: '1px solid #e5e7eb', borderRadius: 8 }}>
        <h2 style={{ fontSize: 15, marginTop: 0, marginBottom: 12 }}>Nuevo ticket</h2>
        <CreateTicketForm />
      </section>

      {/* Paginated list */}
      <section>
        <h2 style={{ fontSize: 15, marginTop: 0, marginBottom: 12 }}>Mis tickets</h2>
        <TicketList />
      </section>
    </div>
  );
}

const btnOutlineStyle: React.CSSProperties = {
  padding:      '6px 12px',
  background:   'transparent',
  border:       '1px solid #ccc',
  borderRadius:  6,
  fontSize:      13,
  cursor:        'pointer',
};
