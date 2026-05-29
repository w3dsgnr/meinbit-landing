import { useEffect, useState } from "react";
import "./CookieBanner.css";

const STORAGE_KEY = "meinbit:cookies";

type Choice = "accepted" | "rejected";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (choice: Choice) => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-title">
      <div id="cookie-title" className="cookie-title">Cookies &amp; Privacy</div>
      <p className="cookie-body">
        Our site uses cookies and similar technologies to offer you a better experience. We use analytical cookies
        (our own and third party) to understand and improve your browsing experience, and advertising cookies
        (our own and third party) to send you advertisements in line with your preferences.{" "}
        <a href="#">Learn more</a>.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-reject" onClick={() => decide("rejected")}>
          Reject all
        </button>
        <button type="button" className="cookie-accept" onClick={() => decide("accepted")}>
          Accept all
        </button>
      </div>
    </div>
  );
}
