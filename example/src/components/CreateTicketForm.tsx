/**
 * CreateTicketForm.tsx
 *
 * Demonstrates useWeeiiMutation.
 *
 * After a successful create the new ticket lands in the store automatically
 * (classifyData runs inside every request). TicketList re-renders because it
 * subscribes to the 'ticket' table via useWeeiiPaginatedCollection.
 */
import { useState }         from 'react';
import { useWeeiiMutation } from '@silasdevs/sdk/react';
import { registrarTicket }  from '@silasdevs/sdk/ticket';

export function CreateTicketForm() {
  const [titulo, setTitulo]           = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [successMsg, setSuccessMsg]   = useState('');
  const [errorMsg, setErrorMsg]       = useState('');

  const { mutate, isLoading } = useWeeiiMutation(
    ({ titulo, descripcion }: { titulo: string; descripcion?: string }) =>
      registrarTicket({ titulo, descripcion }),
    {
      onSuccess: ({ data }) => {
        setSuccessMsg(`Ticket #${data.ticket.id} creado correctamente`);
        setTitulo('');
        setDescripcion('');
        // The new ticket is already in the store — TicketList will reflect it.
      },
      onError: (err) => {
        const e = err as { description?: string };
        setErrorMsg(e.description ?? 'Error al crear ticket');
      },
    },
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');
    mutate({ titulo, descripcion: descripcion || undefined });
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <input
        type="text"
        placeholder="Título del problema"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
        style={inputStyle}
      />
      <textarea
        placeholder="Descripción (opcional)"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        rows={3}
        style={{ ...inputStyle, resize: 'vertical' }}
      />

      {successMsg && (
        <p role="status" style={{ color: '#16a34a', fontSize: 13, margin: 0 }}>
          {successMsg}
        </p>
      )}
      {errorMsg && (
        <p role="alert" style={{ color: '#ef4444', fontSize: 13, margin: 0 }}>
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={isLoading || !titulo.trim()} style={btnStyle}>
        {isLoading ? 'Creando…' : 'Crear ticket'}
      </button>
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  padding:      '8px 10px',
  border:       '1px solid #ccc',
  borderRadius:  6,
  fontSize:      14,
  width:         '100%',
  boxSizing:     'border-box',
};

const btnStyle: React.CSSProperties = {
  padding:      '9px 16px',
  background:   '#3b82f6',
  color:        '#fff',
  border:       'none',
  borderRadius:  6,
  fontSize:      14,
  cursor:        'pointer',
  alignSelf:     'flex-start',
};
