/**
 * useWeeiiMutation — imperative mutation hook for Weeii domain API calls.
 *
 * Thin wrapper around `@silasdevs/core/react`'s `useMutation` — identical API,
 * no extra arguments required.
 *
 * ```tsx
 * const { mutate, mutateAsync, isLoading, error } = useWeeiiMutation(
 *   (params: EditarNegocioParams) => editarNegocio(params),
 *   { onSuccess: () => toast('Guardado') },
 * );
 *
 * <button onClick={() => mutate({ id: 1, nombre: 'Nuevo nombre' })}>
 *   Guardar
 * </button>
 * ```
 */
import { useMutation } from '@silasdevs/core/react';
import type { UseMutationOptions, UseMutationResult } from '@silasdevs/core/react';

export { useMutation as useWeeiiMutation };
export type { UseMutationOptions as UseWeeiiMutationOptions, UseMutationResult as UseWeeiiMutationResult };
