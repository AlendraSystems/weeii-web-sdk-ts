/**
 * useWeeiiPaginatedCollection — paginated, bidirectional store subscription.
 *
 * Thin wrapper around `@silasdevs/core/react`'s `usePaginatedCollection` that
 * pre-binds the SDK singleton store, so callers only need to supply the table
 * name.
 *
 * ```tsx
 * const {
 *   items, count, hasMore,
 *   cursorFor, addPage, clear,
 * } = useWeeiiPaginatedCollection<Entrega>('entrega');
 *
 * // fetch first page
 * useEffect(() => {
 *   entregas({ filas: 20 }).then(res => addPage(res.data.entrega, 'end'));
 * }, []);
 *
 * // fetch next page on scroll
 * const loadMore = () =>
 *   entregas({ id_ultimo: cursorFor('end'), filas: 20 })
 *     .then(res => addPage(res.data.entrega, 'end'));
 * ```
 */
import { usePaginatedCollection } from '@silasdevs/core/react';
import type { UsePaginatedCollectionResult } from '@silasdevs/core/react';
import { getStore } from '../store.js';

export function useWeeiiPaginatedCollection<T extends object = Record<string, unknown>>(
  table: string,
): UsePaginatedCollectionResult<T> {
  return usePaginatedCollection<T>(getStore(), table);
}

export type { UsePaginatedCollectionResult as UseWeeiiPaginatedCollectionResult };
