// Cookie consent state — shared between the banner and the "Cookie settings" entry point.
// Stored as a versioned JSON record so we keep an auditable trail of the user's choice
// (GDPR accountability) and can re-prompt when the version changes.

export const STORAGE_KEY = "meinbit:cookies";
export const CONSENT_VERSION = 1;
export const OPEN_EVENT = "meinbit:open-cookie-settings";

export type CookieCategories = {
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentRecord = {
  v: number;
  ts: string; // ISO timestamp of when consent was recorded
  categories: CookieCategories;
};

export const NONE: CookieCategories = { preferences: false, analytics: false, marketing: false };
export const ALL: CookieCategories = { preferences: true, analytics: true, marketing: true };

/** Returns the stored consent, or null when there is none / it is outdated (→ re-prompt). */
export function readConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>;
    if (parsed && parsed.v === CONSENT_VERSION && parsed.categories) {
      return parsed as ConsentRecord;
    }
    return null; // missing, legacy ("accepted"/"rejected"), or older version → ask again
  } catch {
    return null;
  }
}

/** Persists the user's choice with a fresh timestamp and returns the stored record. */
export function writeConsent(categories: CookieCategories): ConsentRecord {
  const record: ConsentRecord = {
    v: CONSENT_VERSION,
    ts: new Date().toISOString(),
    categories,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  return record;
}

/** True when the given category may load. Non-essential scripts should gate on this. */
export function hasConsent(category: keyof CookieCategories): boolean {
  return readConsent()?.categories[category] === true;
}

/** Re-opens the cookie banner in settings mode (used by the footer "Cookie settings" link). */
export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_EVENT));
}
