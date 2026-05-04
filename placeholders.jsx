// Tutorial placeholder mockups — simplified SVG screenshots
// Each one shows the relevant Giveth UI with the key button highlighted.
// Replace with real screenshots later by swapping the <Placeholder> output
// for an <img src="/placeholders/<name>.png"> using the same `name`.

const PlaceholderShell = ({ children, browser = "qf.giveth.io/project/opensense-open-web3-security" }) => (
  <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="bgGrad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#0a0a0b" />
        <stop offset="1" stopColor="#000000" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#d8dade" />
        <stop offset="1" stopColor="#9da0a6" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect width="480" height="300" fill="url(#bgGrad)" />
    {/* browser chrome */}
    <rect x="0" y="0" width="480" height="22" fill="#111113" />
    <circle cx="10" cy="11" r="3" fill="#3a3c40" />
    <circle cx="20" cy="11" r="3" fill="#3a3c40" />
    <circle cx="30" cy="11" r="3" fill="#3a3c40" />
    <rect x="44" y="6" width="280" height="11" rx="3" fill="#000000" />
    <text x="50" y="14" fill="#6e7178" fontFamily="ui-monospace, monospace" fontSize="7">{browser}</text>
    {children}
  </svg>
);

// Highlighted-button helper
const HotButton = ({ x, y, w, h, label, color = "url(#accentGrad)", textColor = "#000000" }) => (
  <g>
    <rect x={x - 4} y={y - 4} width={w + 8} height={h + 8} rx="8" fill="none" stroke="#d8dade" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="3 3">
      <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.2s" repeatCount="indefinite" />
    </rect>
    <rect x={x} y={y} width={w} height={h} rx="5" fill={color} filter="url(#glow)" />
    <text x={x + w / 2} y={y + h / 2 + 2.5} textAnchor="middle" fill={textColor} fontFamily="Inter, system-ui, sans-serif" fontWeight="600" fontSize="8">{label}</text>
  </g>
);

const Pointer = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    <path d="M0,0 L0,12 L3,9 L5,14 L7,13 L5,8 L9,8 Z" fill="#fff" stroke="#000000" strokeWidth="0.6" />
  </g>
);

// 1. Check eligibility
const PlaceholderCheckEligibility = () => (
  <PlaceholderShell>
    {/* project header */}
    <rect x="20" y="36" width="220" height="14" rx="2" fill="#232427" />
    <rect x="20" y="56" width="160" height="6" rx="2" fill="#2e2f33" />
    <rect x="20" y="68" width="120" height="6" rx="2" fill="#2e2f33" />
    {/* image area */}
    <rect x="260" y="36" width="200" height="120" rx="6" fill="#111113" />
    <circle cx="360" cy="96" r="22" fill="#232427" />
    <text x="360" y="100" textAnchor="middle" fill="#54575c" fontSize="20" fontFamily="ui-monospace">⌬</text>
    {/* sidebar / donate area */}
    <rect x="20" y="170" width="440" height="110" rx="6" fill="#0a0a0b" stroke="#232427" />
    <text x="34" y="192" fill="#a8abb2" fontSize="9" fontFamily="Inter">Want to donate?</text>
    <text x="34" y="206" fill="#6e7178" fontSize="7">Verify your wallet for matching eligibility.</text>
    <HotButton x="34" y="222" w="120" h="22" label="Check eligibility" />
    <Pointer x="100" y="248" />
    <rect x="170" y="222" width="90" height="22" rx="5" fill="#111113" stroke="#2e2f33" />
    <text x="215" y="237" textAnchor="middle" fill="#a8abb2" fontSize="8">Donate</text>
  </PlaceholderShell>
);

// 2. Go to Passport
const PlaceholderGoToPassport = () => (
  <PlaceholderShell>
    <rect x="0" y="22" width="480" height="278" fill="#000000" fillOpacity="0.6" />
    {/* Modal */}
    <rect x="80" y="60" width="320" height="200" rx="10" fill="#0a0a0b" stroke="#2e2f33" />
    <rect x="100" y="84" width="180" height="11" rx="2" fill="#f2f3f5" />
    <rect x="100" y="104" width="240" height="6" rx="2" fill="#3a3c40" />
    <rect x="100" y="116" width="200" height="6" rx="2" fill="#3a3c40" />
    {/* checks list */}
    <g transform="translate(100, 140)">
      <circle cx="6" cy="6" r="4" fill="none" stroke="#3a3c40" />
      <text x="20" y="9" fill="#a8abb2" fontSize="8">Verify your wallet with Passport</text>
      <circle cx="6" cy="22" r="4" fill="none" stroke="#3a3c40" />
      <text x="20" y="25" fill="#a8abb2" fontSize="8">Refresh your eligibility score</text>
      <circle cx="6" cy="38" r="4" fill="none" stroke="#3a3c40" />
      <text x="20" y="41" fill="#a8abb2" fontSize="8">Make a donation</text>
    </g>
    <HotButton x="100" y="216" w="120" h="26" label="Go to Passport" />
    <Pointer x="158" y="246" />
    <rect x="232" y="216" width="80" height="26" rx="5" fill="transparent" stroke="#3a3c40" />
    <text x="272" y="232" textAnchor="middle" fill="#a8abb2" fontSize="8">Cancel</text>
  </PlaceholderShell>
);

// 3. Connect wallet
const PlaceholderPassportWallet = () => (
  <PlaceholderShell browser="passport.gitcoin.co">
    {/* header */}
    <text x="20" y="44" fill="#f2f3f5" fontFamily="Inter" fontSize="11" fontWeight="600">Connect a wallet</text>
    <text x="20" y="58" fill="#6e7178" fontSize="7">Use a wallet you actually use.</text>
    {/* wallet buttons */}
    <g>
      <rect x="20" y="74" width="200" height="38" rx="6" fill="#0a0a0b" stroke="#3a3c40" strokeWidth="1.5" />
      <rect x="32" y="84" width="18" height="18" rx="3" fill="#f5841f" />
      <text x="40" y="97" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">M</text>
      <text x="58" y="92" fill="#f2f3f5" fontSize="9" fontWeight="500">MetaMask</text>
      <text x="58" y="103" fill="#6e7178" fontSize="7">Recommended</text>
      <circle cx="208" cy="93" r="3" fill="#4ade80" />
    </g>
    <g>
      <rect x="20" y="120" width="200" height="32" rx="6" fill="#0a0a0b" stroke="#232427" />
      <rect x="32" y="128" width="16" height="16" rx="3" fill="#3b99fc" />
      <text x="56" y="139" fill="#a8abb2" fontSize="8">WalletConnect</text>
    </g>
    <g>
      <rect x="20" y="160" width="200" height="32" rx="6" fill="#0a0a0b" stroke="#232427" />
      <rect x="32" y="168" width="16" height="16" rx="3" fill="#0052ff" />
      <text x="56" y="179" fill="#a8abb2" fontSize="8">Coinbase Wallet</text>
    </g>
    {/* tip card */}
    <rect x="240" y="74" width="220" height="118" rx="6" fill="#111113" stroke="#232427" />
    <rect x="252" y="86" width="60" height="6" rx="2" fill="#d8dade" />
    <text x="252" y="108" fill="#a8abb2" fontSize="7.5" fontFamily="Inter">A wallet with real transaction</text>
    <text x="252" y="120" fill="#a8abb2" fontSize="7.5">history is more likely to pass</text>
    <text x="252" y="132" fill="#a8abb2" fontSize="7.5">eligibility checks.</text>
    <text x="252" y="156" fill="#6e7178" fontSize="7">✗ New empty wallets</text>
    <text x="252" y="170" fill="#6e7178" fontSize="7">✗ Throwaway wallets</text>
    <text x="252" y="184" fill="#4ade80" fontSize="7">✓ Your real daily wallet</text>
    {/* status */}
    <rect x="20" y="220" width="440" height="40" rx="6" fill="#0a0a0b" stroke="#232427" />
    <circle cx="38" cy="240" r="5" fill="#d8dade">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.4s" repeatCount="indefinite" />
    </circle>
    <text x="54" y="237" fill="#f2f3f5" fontSize="9">Verifying wallet…</text>
    <text x="54" y="249" fill="#6e7178" fontSize="7">Stamps: 4 verified</text>
    <Pointer x="115" y="98" />
  </PlaceholderShell>
);

// 4. Refresh score
const PlaceholderRefreshScore = () => (
  <PlaceholderShell>
    {/* eligibility status banner */}
    <rect x="20" y="36" width="440" height="60" rx="6" fill="#0a0a0b" stroke="#2e2f33" />
    <text x="34" y="56" fill="#a8abb2" fontSize="9">Eligibility status</text>
    <text x="34" y="74" fill="#f2f3f5" fontFamily="Inter" fontSize="13" fontWeight="600">Score: 0</text>
    <text x="34" y="88" fill="#6e7178" fontSize="7">Last updated: just now</text>
    <HotButton x="320" y="54" w="120" h="26" label="Refresh score" />
    <Pointer x="378" y="84" />
    {/* donation card */}
    <rect x="20" y="108" width="440" height="172" rx="6" fill="#0a0a0b" stroke="#232427" />
    <text x="34" y="128" fill="#f2f3f5" fontSize="10" fontWeight="500">Make a donation</text>
    <g opacity="0.5">
      <rect x="34" y="140" width="60" height="32" rx="5" fill="#111113" stroke="#2e2f33" />
      <text x="64" y="160" textAnchor="middle" fill="#a8abb2" fontSize="10">$1</text>
      <rect x="100" y="140" width="60" height="32" rx="5" fill="#111113" stroke="#2e2f33" />
      <text x="130" y="160" textAnchor="middle" fill="#a8abb2" fontSize="10">$5</text>
      <rect x="166" y="140" width="60" height="32" rx="5" fill="#111113" stroke="#2e2f33" />
      <text x="196" y="160" textAnchor="middle" fill="#a8abb2" fontSize="10">$10</text>
    </g>
    <rect x="34" y="186" width="412" height="1" fill="#232427" />
    <text x="34" y="206" fill="#6e7178" fontSize="7">After Passport, refresh your score so</text>
    <text x="34" y="218" fill="#6e7178" fontSize="7">Giveth picks up your verification.</text>
    <rect x="34" y="232" width="412" height="34" rx="5" fill="#111113" opacity="0.5" />
    <text x="240" y="253" textAnchor="middle" fill="#54575c" fontSize="9">Add to Cart</text>
  </PlaceholderShell>
);

// 5. Add to cart
const PlaceholderAddToCart = () => (
  <PlaceholderShell>
    <rect x="20" y="36" width="440" height="40" rx="6" fill="#0a0a0b" stroke="#2e2f33" />
    <circle cx="40" cy="56" r="6" fill="#4ade80" />
    <text x="54" y="60" fill="#f2f3f5" fontSize="9">You're eligible — donations count for matching</text>
    {/* amount picker */}
    <text x="20" y="100" fill="#a8abb2" fontSize="10" fontWeight="500">Choose amount</text>
    <g>
      <rect x="20" y="110" width="64" height="36" rx="6" fill="#111113" stroke="#2e2f33" />
      <text x="52" y="132" textAnchor="middle" fill="#f2f3f5" fontSize="11">$1</text>
      <rect x="92" y="110" width="64" height="36" rx="6" fill="#111113" stroke="#2e2f33" />
      <text x="124" y="132" textAnchor="middle" fill="#f2f3f5" fontSize="11">$2</text>
      <rect x="164" y="110" width="64" height="36" rx="6" fill="#0a0a0b" stroke="#d8dade" strokeWidth="1.5" />
      <text x="196" y="132" textAnchor="middle" fill="#d8dade" fontSize="11" fontWeight="600">$5</text>
      <rect x="236" y="110" width="64" height="36" rx="6" fill="#111113" stroke="#2e2f33" />
      <text x="268" y="132" textAnchor="middle" fill="#f2f3f5" fontSize="11">$10</text>
      <rect x="308" y="110" width="100" height="36" rx="6" fill="#111113" stroke="#2e2f33" />
      <text x="358" y="132" textAnchor="middle" fill="#6e7178" fontSize="9">Custom…</text>
    </g>
    {/* token select */}
    <rect x="20" y="160" width="440" height="40" rx="6" fill="#111113" stroke="#232427" />
    <circle cx="40" cy="180" r="9" fill="#627eea" />
    <text x="40" y="184" textAnchor="middle" fill="#fff" fontSize="9">Ξ</text>
    <text x="56" y="184" fill="#f2f3f5" fontSize="9">ETH on Optimism</text>
    <text x="436" y="184" textAnchor="end" fill="#a8abb2" fontSize="9">≈ $5.00</text>
    {/* add to cart */}
    <HotButton x="20" y="220" w="440" h="44" label="Add to Cart" />
    <Pointer x="240" y="266" />
    <text x="240" y="288" textAnchor="middle" fill="#6e7178" fontSize="7">You can review and confirm in your cart.</text>
  </PlaceholderShell>
);

// 6. Checkout
const PlaceholderCheckout = () => (
  <PlaceholderShell browser="qf.giveth.io/cart">
    <text x="20" y="44" fill="#f2f3f5" fontFamily="Inter" fontSize="12" fontWeight="600">Your cart</text>
    {/* cart row */}
    <rect x="20" y="56" width="440" height="60" rx="6" fill="#0a0a0b" stroke="#232427" />
    <rect x="32" y="68" width="36" height="36" rx="6" fill="url(#accentGrad)" />
    <text x="50" y="91" textAnchor="middle" fill="#1a1200" fontSize="14" fontWeight="700">O</text>
    <text x="80" y="80" fill="#f2f3f5" fontSize="10" fontWeight="500">OpenSense — Open Web3 Security</text>
    <text x="80" y="94" fill="#6e7178" fontSize="7.5">Ethereum Security Fund · Round</text>
    <text x="80" y="106" fill="#a8abb2" fontSize="8">$5.00 · ETH on Optimism</text>
    <circle cx="440" cy="86" r="8" fill="#111113" stroke="#3a3c40" />
    <text x="440" y="89" textAnchor="middle" fill="#a8abb2" fontSize="9">×</text>
    {/* summary */}
    <rect x="20" y="128" width="440" height="100" rx="6" fill="#0a0a0b" stroke="#232427" />
    <text x="34" y="148" fill="#a8abb2" fontSize="9">Donation</text>
    <text x="446" y="148" textAnchor="end" fill="#f2f3f5" fontSize="9">$5.00</text>
    <text x="34" y="166" fill="#a8abb2" fontSize="9">Estimated matching</text>
    <text x="446" y="166" textAnchor="end" fill="#d8dade" fontSize="9">+ $—</text>
    <rect x="34" y="178" width="412" height="1" fill="#232427" />
    <text x="34" y="198" fill="#f2f3f5" fontSize="10" fontWeight="600">Total</text>
    <text x="446" y="198" textAnchor="end" fill="#f2f3f5" fontSize="10" fontWeight="600">$5.00</text>
    <text x="34" y="216" fill="#6e7178" fontSize="7">Final matching is calculated after the round.</text>
    {/* confirm button */}
    <HotButton x="20" y="240" w="440" h="40" label="Confirm donation" />
    <Pointer x="240" y="282" />
  </PlaceholderShell>
);

const PLACEHOLDERS = {
  "check-eligibility": PlaceholderCheckEligibility,
  "go-to-passport": PlaceholderGoToPassport,
  "passport-wallet": PlaceholderPassportWallet,
  "refresh-score": PlaceholderRefreshScore,
  "add-to-cart": PlaceholderAddToCart,
  "checkout": PlaceholderCheckout,
};

const Placeholder = ({ name }) => {
  const Comp = PLACEHOLDERS[name];
  return (
    <img
      src={`public/placeholders/${name}.png`}
      alt={name}
      style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block", background: "#fff" }}
      onError={(e) => {
        e.target.style.display = "none";
        if (e.target.nextSibling) e.target.nextSibling.style.display = "block";
      }}
    />
  );
};

window.Placeholder = Placeholder;
