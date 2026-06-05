import { useEffect, useState } from "react";
import {
  ALL,
  NONE,
  OPEN_EVENT,
  readConsent,
  writeConsent,
  type CookieCategories,
} from "./consent";
import "./CookieBanner.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState<CookieCategories>(NONE);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setVisible(true); // no valid consent yet → ask before any non-essential cookies
    } else {
      setPrefs(existing.categories);
    }

    // Footer "Cookie settings" re-opens the banner pre-filled with the current choice.
    const reopen = () => {
      const current = readConsent();
      setPrefs(current ? current.categories : NONE);
      setShowSettings(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  if (!visible) return null;

  const finish = (categories: CookieCategories) => {
    writeConsent(categories);
    setPrefs(categories);
    setVisible(false);
    setShowSettings(false);
  };

  const toggle = (key: keyof CookieCategories) =>
    setPrefs((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-title">
      <div id="cookie-title" className="cookie-title">Cookies &amp; Privacy</div>
      <p className="cookie-body">
        We use strictly necessary cookies to make the Service work. With your consent we also use
        preferences, analytics, and marketing cookies. You can accept all, reject all, or choose by
        category — and change your choice anytime via “Cookie settings”.{" "}
        <a href="/cookie-policy">Learn more</a>.
      </p>

      {showSettings && (
        <div className="cookie-cats">
          <div className="cookie-cat cookie-cat--locked">
            <span className="cookie-cat-info">
              <span className="cookie-cat-name">Strictly necessary</span>
              <span className="cookie-cat-desc">
                Required for security, sign-in, and core functionality. Always on.
              </span>
            </span>
            <input
              type="checkbox"
              className="cookie-switch"
              checked
              disabled
              aria-label="Strictly necessary cookies (always on)"
            />
          </div>

          <label className="cookie-cat">
            <span className="cookie-cat-info">
              <span className="cookie-cat-name">Preferences</span>
              <span className="cookie-cat-desc">
                Remember choices like language and interface settings.
              </span>
            </span>
            <input
              type="checkbox"
              className="cookie-switch"
              checked={prefs.preferences}
              onChange={() => toggle("preferences")}
            />
          </label>

          <label className="cookie-cat">
            <span className="cookie-cat-info">
              <span className="cookie-cat-name">Analytics</span>
              <span className="cookie-cat-desc">
                Help us understand and improve how the Service is used.
              </span>
            </span>
            <input
              type="checkbox"
              className="cookie-switch"
              checked={prefs.analytics}
              onChange={() => toggle("analytics")}
            />
          </label>

          <label className="cookie-cat">
            <span className="cookie-cat-info">
              <span className="cookie-cat-name">Marketing</span>
              <span className="cookie-cat-desc">
                Deliver and measure relevant marketing across platforms.
              </span>
            </span>
            <input
              type="checkbox"
              className="cookie-switch"
              checked={prefs.marketing}
              onChange={() => toggle("marketing")}
            />
          </label>
        </div>
      )}

      <div className="cookie-actions">
        <button type="button" className="cookie-reject" onClick={() => finish(NONE)}>
          Reject all
        </button>
        {showSettings ? (
          <button type="button" className="cookie-customize" onClick={() => finish(prefs)}>
            Save preferences
          </button>
        ) : (
          <button type="button" className="cookie-customize" onClick={() => setShowSettings(true)}>
            Customize
          </button>
        )}
        <button type="button" className="cookie-accept" onClick={() => finish(ALL)}>
          Accept all
        </button>
      </div>
    </div>
  );
}
