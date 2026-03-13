# clawvault-sdk

TypeScript SDK for the [ClawVault](https://clawvault.cc) API — security middleware for AI agents handling money.

## Install

```bash
npm install clawvault-sdk
```

## Quick Start

```typescript
import { ClawVault } from 'clawvault-sdk';

// Partner key — onboard agents
const cv = new ClawVault({ apiKey: 'cv_partner_xxx' });

const agent = await cv.partner.onboard({
  externalUserId: 'user_123',
  chain: 'solana',
  agentName: 'Trading Bot',
});

console.log(agent.apiKey);       // cv_live_xxx
console.log(agent.walletAddress); // 8G8k...
```

```typescript
// Agent key — make payments
const agent = new ClawVault({ apiKey: 'cv_live_xxx' });

const payment = await agent.payments.request({
  amount: '10.00',
  token: 'USDC',
  recipient: '0x...',
  chain: 'base',
  reason: 'Invoice #42',
});
```

## Modules

| Module | Methods |
|--------|---------|
| `cv.payments` | `request()`, `get()`, `list()`, `approve()`, `deny()` |
| `cv.vault` | `list()`, `create()`, `balance()`, `withdraw()` |
| `cv.swap` | `quote()`, `execute()` |
| `cv.predictions` | `markets()`, `market()`, `buy()`, `sell()`, `redeem()`, `positions()`, `wallet()` |
| `cv.card` | `purchase()`, `balance()`, `check()` |
| `cv.rules` | `get()`, `update()` |
| `cv.agents` | `list()`, `freeze()` |
| `cv.goat` | `actions()`, `rules()`, `execute()` |
| `cv.partner` | `onboard()`, `listAgents()`, `getAgent()`, `freezeAgent()`, `unfreezeAgent()`, `revokeAgent()`, `usage()` |

## Supported Chains

Base, Ethereum, Arbitrum, Polygon, BNB Chain, Solana — all gasless.

## Error Handling

```typescript
import { ClawVault, ClawVaultError } from 'clawvault-sdk';

try {
  await cv.payments.request({ ... });
} catch (e) {
  if (e instanceof ClawVaultError) {
    console.log(e.code);       // 'INSUFFICIENT_BALANCE'
    console.log(e.message);    // 'Available: 25.10 USDC, Requested: 100'
    console.log(e.statusCode); // 400
  }
}
```

## Key Types

| Prefix | Type | Use |
|--------|------|-----|
| `cv_partner_` | Partner key | Onboard agents, manage fleet |
| `cv_live_` | Agent key | Payments, swaps, predictions |

Partner keys cannot access agent endpoints and vice versa.

## Requirements

- Node.js 18+ (uses native `fetch`)
- Zero runtime dependencies

## Links

- [Documentation](https://clawvault.cc/docs)
- [API Reference](https://api.clawvault.cc/skill)
- [Twitter](https://x.com/clawvaults)
