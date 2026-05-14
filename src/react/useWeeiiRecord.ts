/**
 * useWeeiiRecord — subscribes to a single record in the Weeii store.
 *
 * Thin wrapper around `@silasdevs/core/react`'s `useRecord` that provides
 * the singleton Weeii store automatically.
 *
 * ```tsx
 * const usuario = useWeeiiRecord<Usuario>('usuario', userId);
 * ```
 */
import { useRecord } from '@silasdevs/core/react';
import { getStore } from '../store.js';

export function useWeeiiRecord<T extends object = Record<string, unknown>>(
  table: string,
  id: string | number,
): T | undefined {
  return useRecord<T>(getStore(), table, id);
}
