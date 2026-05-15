/**
 * useWeeiiQuery — async data-fetching hook for Weeii domain API calls.
 *
 * Thin wrapper around `@silasdevs/core/react`'s `useQuery` — identical API,
 * no extra arguments required.
 *
 * ```tsx
 * const { data, isLoading, error, refetch } = useWeeiiQuery(
 *   () => miNegocio(),
 *   [],
 * );
 * ```
 *
 * The query re-runs when `deps` change (same rules as `useEffect`).
 */
import { useQuery } from '@silasdevs/core/react';
import type { UseQueryOptions, UseQueryResult } from '@silasdevs/core/react';

export { useQuery as useWeeiiQuery };
export type { UseQueryOptions as UseWeeiiQueryOptions, UseQueryResult as UseWeeiiQueryResult };
