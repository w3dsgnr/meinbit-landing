export const whyCards = [
  {
    image: "/add-crypto.png",
    title: "Multi-currency wallet",
    body: "Hold EUR, USD, GBP and 180+ currencies alongside BTC, ETH, SOL and more. Switch between them instantly — no hidden conversion fees, no waiting.",
  },
  {
    image: "/Virtual%20Mastercard.png",
    title: "Virtual Mastercard",
    body: "Accepted at 50M+ merchants. Issued instantly, linked to any balance you choose — fiat or crypto.",
  },
  {
    image: "/Instant%20swaps.png",
    title: "Instant swaps",
    body: "Exchange fiat to crypto and back in under 2 seconds. Best rates, always — no separate wallet needed.",
  },
  {
    image: "/Global%20transfers.png",
    title: "Global transfers",
    body: "Send money to 100+ countries with no SWIFT fees. Arrives in seconds, not days — free between MeinBit users.",
  },
  {
    image: "/live%20market%20data.png",
    title: "Live market data",
    body: "Real-time prices, portfolio analytics, and smart alerts to stay ahead of every move.",
  },
  {
    image: "/Secure%20by%20design.png",
    title: "Secure by design",
    body: "Biometric login, 2FA, PIN and cold-storage encryption protect every transaction and asset you hold.",
  },
] as const;

export const cardFeatures = [
  { icon: "ti-credit-card",            text: "Instant virtual card" },
  { icon: "ti-truck-delivery",         text: "Plastic card delivered" },
  { icon: "ti-device-mobile",          text: "Apple & Google Pay" },
  { icon: "ti-snowflake",              text: "Freeze in one tap" },
  { icon: "ti-coins",                  text: "Pay with fiat or crypto" },
  { icon: "ti-adjustments-horizontal", text: "Per-merchant limits" },
] as const;

// Card variants for the fan-out stack. `brand` matches the Figma design
// (gradient #56ff7f → #007eec); the other two are minimalist alternatives.
export const bankCards = [
  { variant: "light", last4: "7390" },
  { variant: "brand", last4: "2547" },
  { variant: "dark",  last4: "1834" },
] as const;

export const fiatBlocks = [
  {
    title: "Open an account in minutes",
    mockup: "/open%20account.png",
    mockupAlt: "MeinBit multi-currency account screen",
    features: [
      {
        icon: "ti-wallet",
        title: "Instant EUR & USD account",
        body: "Open a fully-featured multi-currency account in minutes — no branch visit, no paperwork, no waiting.",
      },
      {
        icon: "ti-id",
        title: "Personal IBAN",
        body: "Get your own dedicated IBAN to receive salaries, invoices and payments from anyone, anywhere.",
      },
      {
        icon: "ti-activity",
        title: "Real-time balance updates",
        body: "Every transaction lands instantly with a push notification — you always know exactly where you stand.",
      },
    ],
  },
  {
    title: "Move money, anywhere",
    mockup: "/move%20money.png",
    mockupAlt: "MeinBit transfers and cards screen",
    features: [
      {
        icon: "ti-arrows-exchange",
        title: "SEPA & SWIFT transfers",
        body: "Move money across borders at bank-grade speed with transparent, low fees and live exchange rates.",
      },
      {
        icon: "ti-credit-card",
        title: "Up to 10 linked cards",
        body: "Issue virtual and plastic Mastercards and manage all of them from a single, unified account.",
      },
      {
        icon: "ti-list-search",
        title: "Transaction history & search",
        body: "Find any payment in seconds with smart categories, filters and full-text search across your history.",
      },
    ],
  },
] as const;

export const currencies = [
  { code: "EUR", name: "Euro",          symbol: "€",  color: "#0A66FF" },
  { code: "USD", name: "US Dollar",     symbol: "$",  color: "#1B8B5A" },
  { code: "GBP", name: "British Pound", symbol: "£",  color: "#C8102E" },
  { code: "CHF", name: "Swiss Franc",   symbol: "Fr", color: "#D8232A" },
  { code: "JPY", name: "Japanese Yen",  symbol: "¥",  color: "#BC002D" },
  { code: "AED", name: "UAE Dirham",    symbol: "Dh", color: "#F39200" },
  { code: "SAR", name: "Saudi Riyal",   symbol: "SR", color: "#006C35" },
  { code: "PLN", name: "Polish Złoty",  symbol: "zł", color: "#1E4FA3" },
  { code: "TRY", name: "Turkish Lira",  symbol: "₺",  color: "#D62612" },
] as const;

export type CryptoTicker = {
  coinGeckoId: string;
  image: string;
  name: string;
  sym: string;
  fallbackPrice: string;
  fallbackChange: string;
};

export const cryptoTickers: readonly CryptoTicker[] = [
  { coinGeckoId: "bitcoin",     image: "/Bitcoin%20(BTC).png",       name: "Bitcoin",  sym: "BTC",  fallbackPrice: "$67,420", fallbackChange: "+2.4%" },
  { coinGeckoId: "ethereum",    image: "/Ethereum%20(ETH).png",      name: "Ethereum", sym: "ETH",  fallbackPrice: "$3,512",  fallbackChange: "+1.8%" },
  { coinGeckoId: "usd-coin",    image: "/USD%20Coin%20(USDC).png",   name: "USD Coin", sym: "USDC", fallbackPrice: "$1.00",   fallbackChange: "+0.01%" },
  { coinGeckoId: "tron",        image: "/TRON%20(TRX).png",          name: "Tron",     sym: "TRX",  fallbackPrice: "$0.121",  fallbackChange: "+3.2%" },
  { coinGeckoId: "solana",      image: "/Solana%20(SOL).png",        name: "Solana",   sym: "SOL",  fallbackPrice: "$182",    fallbackChange: "+5.1%" },
  { coinGeckoId: "binancecoin", image: "/Binance%20Coin%20(BNB).png", name: "BNB",      sym: "BNB",  fallbackPrice: "$612",    fallbackChange: "+1.6%" },
];

// The two messages that carry this section — expanded from throwaway chips
// into the visual lead of the crypto block.
export const cryptoHighlights = [
  {
    icon: "ti-discount",
    title: "Low fees",
    body: "Keep more of every move. No hidden spreads, no surprise charges — convert and transfer crypto at some of the lowest rates anywhere, with costs you can see upfront.",
  },
  {
    icon: "ti-wallet",
    title: "No separate wallet",
    body: "Your crypto lives right next to your fiat. No seed phrases to guard, no external app, no addresses to copy — just hold, send and swap straight from your MeinBit account.",
  },
] as const;

export const securityCards = [
  { image: "/Biometric%20login.png",            title: "Biometric login",           body: "Face ID and Touch ID keep your account accessible only to you." },
  { image: "/Two-Factor%20Authentication.png",  title: "Two-Factor Authentication", body: "An extra layer of security for every login and transaction." },
  { image: "/PIN%20protection.png",             title: "PIN protection",            body: "Confirm every transfer with your personal PIN." },
] as const;

export const securityChips = [
  { icon: "ti-lock",             text: "End-to-end encryption" },
  { icon: "ti-credit-card-off",  text: "Instant card freeze" },
  { icon: "ti-eye",              text: "Advanced ML identity verification" },
  { icon: "ti-certificate",      text: "PCI DSS compliant" },
  { icon: "ti-building-bank",    text: "Licensed virtual currency business (RDWW-1771, Poland)" },
] as const;

export const startSteps = [
  { num: "01", title: "Register for free",          body: "Sign up with your phone number. No hidden fees, no paperwork." },
  { num: "02", title: "Verify your identity",       body: "Complete a quick KYC check to unlock your full account." },
  { num: "03", title: "Issue your card",            body: "Order a virtual or plastic Mastercard linked to your wallet." },
  { num: "04", title: "Fund your wallet",           body: "Top up via bank transfer, card, or crypto deposit." },
  { num: "05", title: "Send, receive & exchange",   body: "Manage all your finances worldwide from one powerful app." },
] as const;

export const faqItems = [
  {
    q: "What is MeinBit?",
    a: "MeinBit is a multi-currency digital wallet that combines fiat and cryptocurrency in one app. You can store, send, receive and exchange money in multiple currencies, issue virtual and plastic Mastercards, and make payments worldwide — all from your smartphone.",
  },
  {
    q: "In which countries is MeinBit available?",
    a: "MeinBit is designed for users across Europe. The app supports EUR, USD and other major currencies with SEPA and SWIFT transfers. Availability may vary by country — check the app for your region.",
  },
  {
    q: "How do I create an account?",
    a: "Download the MeinBit app, enter your phone number and create a password. Registration takes under a minute. To unlock full functionality, complete a quick identity verification (KYC) — this usually takes just a few minutes.",
  },
  {
    q: "Why is identity verification required?",
    a: "KYC (Know Your Customer) verification is required by financial regulations to prevent fraud and money laundering. It also unlocks higher transaction limits and the ability to issue a bank card. We use advanced ML technology to make the process fast and secure.",
  },
  {
    q: "What cards does MeinBit offer?",
    a: "MeinBit offers two types of Mastercard: a virtual card (issued instantly, perfect for online payments and mobile wallets like Apple Pay or Google Pay) and a physical plastic card (delivered to your address). Both cards are linked directly to your wallet balance.",
  },
  {
    q: "Can I pay with crypto using my card?",
    a: "Yes. When making a payment, you can set your spending priority — debit from your fiat account or your crypto account. If you choose crypto, the app converts it to fiat automatically at the current rate. No manual exchange is needed.",
  },
  {
    q: "What cryptocurrencies are supported?",
    a: "MeinBit supports Bitcoin (BTC), Ethereum (ETH), USD Coin (USDC), TRON (TRX), Solana (SOL), AUCTION, and more. You can hold, send, receive and instantly swap between any supported assets.",
  },
  {
    q: "How are my funds protected?",
    a: "Your account is protected by biometric authentication (Face ID / Touch ID), a personal PIN, and two-factor authentication (2FA). All data is encrypted locally on your device. You can freeze your card instantly from the app if you suspect any unauthorised use.",
  },
  {
    q: "What are the fees?",
    a: "Transfers between MeinBit users are free. For external bank transfers (SEPA, SWIFT) and crypto transactions, standard network or processing fees may apply. Card issuance fees: virtual card from €9, plastic card from €14. See the Plans section in the app for current pricing.",
  },
  {
    q: "How do I contact support?",
    a: "In-app support is available 24/7 via the chat button. You can also reach us through the Support page on our website. For regulatory or compliance inquiries, contact LUNTRA sp. z o.o. directly.",
  },
] as const;
