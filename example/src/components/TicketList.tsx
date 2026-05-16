/**
 * TicketList.tsx
 *
 * Demonstrates:
 *   - useWeeiiQuery to trigger the initial fetch on mount
 *   - useWeeiiPaginatedCollection to subscribe to the store and manage pages
 *
 * Pattern explanation:
 *   1. useWeeiiQuery fires tickets() when the component mounts.
 *      classifyData() puts the results into the 'ticket' store table.
 *   2. A useEffect seeds addPage when the query data first arrives.
 *   3. useWeeiiPaginatedCollection subscribes to that table and exposes a
 *      cursor-based API for appending more pages.
 *   4. The "Cargar más" button advances the cursor and appends the next page.
 *   5. When CreateTicketForm creates a new ticket, classifyData() upserts it
 *      into the store, and this component re-renders automatically.
 */
import { useEffect, useRef }               from 'react';
import { useWeeiiQuery, useWeeiiPaginatedCollection } from '@weeii/sdk/react';
import { tickets }                          from '@weeii/sdk/ticket';
import type { Ticket }                      from '@weeii/sdk/ticket';
import type { WeeiiIncomingMessage }        from '@weeii/sdk';

const PAGE_SIZE = 20;

export function TicketList() {
  // 1. Initial fetch — runs once on mount.
  const { isLoading, error, data: queryData } = useWeeiiQuery(
    () => tickets({ id_ultimo: 0, filas: PAGE_SIZE }),
    [],  // no deps — runs once
  );

  // 2. Reactive store subscription.
  const { items, count, hasMore, cursorFor, addPage } =
    useWeeiiPaginatedCollection<Ticket>('ticket');

  // 3. Seed the paginated window when the first-page query resolves.
  //    useRef guards against double-invocation in React StrictMode.
  const seeded = useRef(false);
  useEffect(() => {
    if (queryData && !seeded.current) {
      seeded.current = true;
      const msg = queryData as WeeiiIncomingMessage<{ ticket: Ticket[] }>;
      addPage(msg.data.ticket, 'descending');
    }
  }, [queryData, addPage]);

  async function loadMore() {
    // cursorFor('descending') returns the string ID of the last loaded record.
    const cursor = cursorFor('descending');
    const id_ultimo = cursor !== undefined ? Number(cursor) : 0;
    const res = await tickets({ id_ultimo, filas: PAGE_SIZE });
    addPage(res.data.ticket, 'descending');
  }

  if (isLoading && items.length === 0) {
    return <p style={{ color: '#888', fontSize: 14 }}>Cargando tickets…</p>;
  }

  if (error) {
    const e = error as { description?: string };
    return (
      <p role="alert" style={{ color: '#ef4444', fontSize: 14 }}>
        {e.description ?? 'Error al cargar tickets'}
      </p>
    );
  }

  if (items.length === 0) {
    return <p style={{ color: '#888', fontSize: 14 }}>Sin tickets aún.</p>;
  }

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </ul>

      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        {hasMore && (
          <button onClick={loadMore} style={loadMoreBtnStyle}>
            Cargar más
          </button>
        )}
        <span style={{ fontSize: 12, color: '#9ca3af' }}>{count} cargados</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-component: individual ticket row
// ---------------------------------------------------------------------------

function TicketCard({ ticket }: { ticket: Ticket }) {
  const statusColor: Record<string, string> = {
    abierto:   '#3b82f6',
    en_proceso: '#f59e0b',
    cerrado:   '#6b7280',
  };

  const estatus = (ticket as unknown as { estatus?: string }).estatus ?? 'abierto';

  return (
    <li
      style={{
        padding:      '12px 14px',
        border:       '1px solid #e5e7eb',
        borderRadius:  8,
        display:       'flex',
        justifyContent: 'space-between',
        alignItems:    'center',
        gap:           12,
      }}
    >
      <div>
        <p style={{ margin: 0, fontWeight: 500, fontSize: 14 }}>{(ticket as unknown as { titulo?: string }).titulo}</p>
        <p style={{ margin: '2px 0 0', fontSize: 12, color: '#9ca3af' }}>#{ticket.id}</p>
      </div>
      <span
        style={{
          fontSize:     11,
          fontWeight:   600,
          padding:      '3px 8px',
          borderRadius:  12,
          background:   `${statusColor[estatus] ?? '#6b7280'}22`,
          color:         statusColor[estatus] ?? '#6b7280',
          whiteSpace:   'nowrap',
        }}
      >
        {estatus}
      </span>
    </li>
  );
}

const loadMoreBtnStyle: React.CSSProperties = {
  padding:      '7px 14px',
  background:   'transparent',
  border:       '1px solid #d1d5db',
  borderRadius:  6,
  fontSize:      13,
  cursor:        'pointer',
};
