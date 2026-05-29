# MeinBit Landing

Marketing site for MeinBit — a multi-currency wallet for fiat and crypto.

Built with Vite + React 19 + TypeScript + React Router.

## Prerequisites

- Node.js 18+ ([nodejs.org](https://nodejs.org))

## Install

```bash
npm install
```

## Develop

```bash
npm run dev
```

Opens http://localhost:5173 (or next free port).

## Build

```bash
npm run build
```

Production output goes to `dist/`.

## Preview the production build

```bash
npm run preview
```

## Project structure

```
src/
├── main.tsx                  ← entry point
├── App.tsx                   ← BrowserRouter + routes
├── pages/
│   ├── HomePage.tsx
│   └── policies/             ← Privacy, Cookie, AML/KYC, Terms, Imprint
├── components/
│   ├── Background/           ← fixed video + aurora + dots + grain
│   ├── Nav/
│   ├── Hero/                 ← real app screenshots with scroll/mouse parallax
│   ├── ContentCard/          ← all middle sections in one component
│   ├── Footer/
│   ├── CookieBanner/
│   └── PolicyLayout/         ← shared layout for legal pages
├── hooks/
│   ├── useStaggerReveal.ts   ← IntersectionObserver reveal
│   └── useCryptoPrices.ts    ← CoinGecko polling (60s)
├── lib/
│   └── data.ts               ← FAQ, currencies, tickers, why-cards, etc.
└── styles/
    └── globals.css           ← tokens, reset, buttons, section headings
```

## Notes

- Live crypto prices come from CoinGecko's public `simple/price` endpoint, polled every 60 s. No API key required.
- All animations respect `prefers-reduced-motion`.
- Cookie banner choice is persisted in `localStorage` under `meinbit:cookies`.
- Operator: Trust Change Sp. z o.o. (Poland) · RDWW-1241.
