# @weeii/sdk — Example App

A minimal but realistic React + Vite app demonstrating the full SDK lifecycle:

- SDK bootstrap with `<WeeiiProvider>`
- Login / logout with session persistence
- Listing support tickets (paginated)
- Creating a ticket (mutation)
- Real-time connection status banner

## Setup

```bash
cd example
pnpm install
pnpm dev
```

Copy `.env.example` to `.env` and set your WebSocket URL:

```bash
cp .env.example .env
# edit VITE_WS_URL
```

## Structure

```
example/
  src/
    main.tsx                  — entry point, WeeiiProvider bootstrap
    App.tsx                   — auth-gated routing
    pages/
      LoginPage.tsx           — phone + password login form
      TicketsPage.tsx         — paginated ticket list + create form
    components/
      ConnectionBanner.tsx    — reconnecting/offline indicator
      TicketList.tsx          — paginated list with load-more
      CreateTicketForm.tsx    — mutation form
    hooks/
      useAuth.tsx             — login / logout helpers
  index.html
  vite.config.ts
  tsconfig.json
  package.json
  .env.example
```

## Key patterns shown

| Pattern | File |
|---|---|
| `<WeeiiProvider>` bootstrap | `src/main.tsx` |
| Auth state from `useWeeiiContext` | `src/App.tsx` |
| Connection indicator | `src/components/ConnectionBanner.tsx` |
| Data fetching with `useWeeiiQuery` | `src/pages/TicketsPage.tsx` |
| Pagination with `useWeeiiPaginatedCollection` | `src/components/TicketList.tsx` |
| Create mutation with `useWeeiiMutation` | `src/components/CreateTicketForm.tsx` |
| Login / logout flow | `src/hooks/useAuth.tsx` |
