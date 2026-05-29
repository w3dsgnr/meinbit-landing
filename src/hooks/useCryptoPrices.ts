import { useEffect, useState } from "react";

export type Quote = {
  price: string;
  change: string;
  changePositive: boolean;
};

const POLL_MS = 60_000;
const ENDPOINT = "https://api.coingecko.com/api/v3/simple/price";

/*
  Polls CoinGecko's `simple/price` endpoint every 60s for the given coin IDs.
  Returns a map keyed by CoinGecko ID. While the first request is in flight,
  the map is empty — call sites should fall back to static defaults.
*/
export function useCryptoPrices(ids: readonly string[]) {
  const [quotes, setQuotes] = useState<Record<string, Quote>>({});

  useEffect(() => {
    if (ids.length === 0) return;

    let cancelled = false;
    const url = `${ENDPOINT}?ids=${ids.join(",")}&vs_currencies=usd&include_24hr_change=true`;

    const fetchPrices = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) return;
        const data: Record<string, { usd?: number; usd_24h_change?: number }> = await res.json();
        if (cancelled) return;

        const next: Record<string, Quote> = {};
        for (const id of ids) {
          const entry = data[id];
          if (!entry || entry.usd == null) continue;
          const change = entry.usd_24h_change ?? 0;
          next[id] = {
            price: formatPrice(entry.usd),
            change: formatChange(change),
            changePositive: change >= 0,
          };
        }
        setQuotes(next);
      } catch {
        // Network/CORS error — keep prior state, call sites use fallback.
      }
    };

    fetchPrices();
    const interval = window.setInterval(fetchPrices, POLL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [ids]);

  return quotes;
}

function formatPrice(usd: number): string {
  if (usd >= 100) {
    return "$" + usd.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }
  if (usd >= 1) {
    return "$" + usd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  // < $1 — show more decimals for visibility
  return "$" + usd.toLocaleString("en-US", { minimumFractionDigits: 3, maximumFractionDigits: 4 });
}

function formatChange(pct: number): string {
  const sign = pct >= 0 ? "+" : "";
  return `${sign}${pct.toFixed(2)}%`;
}
