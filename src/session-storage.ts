/**
 * Session token persistence.
 *
 * Replaces:
 *   - `LStore.ls_getJSON('app_db')` / `Mapa.get(app_db, 'sesion_actual', 'token')`
 *   - `wrapper_guardar_sesion` in sesion.js
 *
 * All data is stored under a single key in localStorage so it's easy to
 * inspect and wipe in dev tools.
 */

const STORAGE_KEY = 'weeii_sdk';

interface StoredData {
  token?:      string;
  token_push?: string;
}

function load(): StoredData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as StoredData;
  } catch {
    return {};
  }
}

function save(data: StoredData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage full or unavailable — fail silently.
  }
}

// ─────────────────────────────────────────────────────────────────────────────

export function saveSessionToken(token: string): void {
  save({ ...load(), token });
}

export function loadSessionToken(): string | undefined {
  return load().token;
}

export function savePushToken(token: string): void {
  save({ ...load(), token_push: token });
}

export function loadPushToken(): string | undefined {
  return load().token_push;
}

export function clearSession(): void {
  const current = load();
  delete current.token;
  save(current);
}

export function clearAll(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
