/**
 * useWeeiiCollection — subscribes to an entire table collection in the Weeii store.
 *
 * Thin wrapper around `@silasdevs/core/react`'s `useCollection` that provides
 * the singleton Weeii store automatically.
 *
 * ```tsx
 * const { items, count } = useWeeiiCollection<Sesion>('sesion');
 * ```
 */
import { useCollection } from '@silasdevs/core/react';
import type { CollectionState } from '@silasdevs/core/store';
import { getStore } from '../store.js';

export function useWeeiiCollection<T extends object = Record<string, unknown>>(
  table: string,
): CollectionState<T> {
  return useCollection<T>(getStore(), table);
}
