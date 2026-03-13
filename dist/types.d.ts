export interface PaymentRequest {
    amount: string;
    token: string;
    recipient: string;
    chain?: string;
    reason?: string;
}
export interface Payment {
    id: string;
    amount: string;
    token: string;
    recipient: string;
    chain: string;
    status: string;
    reason?: string;
    txHash?: string;
    explorerUrl?: string;
    createdAt: string;
}
export interface PaymentCheckRequest {
    amount: string;
    token: string;
    recipient: string;
    chain?: string;
}
export interface PaymentCheckResult {
    autoApprove: boolean;
    reasons?: string[];
}
export interface PaymentListQuery {
    limit?: number;
    status?: string;
}
export interface PaymentList {
    items: Payment[];
    payments: Payment[];
    total: number;
}
export interface Vault {
    id: string;
    address: string;
    chain: string;
    chainDisplay: string;
    label: string;
    isPrimary: boolean;
    balance?: VaultBalance;
    agentCount?: number;
}
export interface VaultBalance {
    native: string;
    usdc: string;
    allTokens?: TokenBalance[];
}
export interface TokenBalance {
    token: string;
    symbol: string;
    balance: string;
    decimals: number;
}
export interface VaultCreateRequest {
    chain?: string;
    ownerKey?: string;
    label?: string;
}
export interface VaultCreateResult {
    address: string;
    chain: string;
    vaultId: string;
    isNew: boolean;
}
export interface WithdrawRequest {
    vaultAddress: string;
    destination: string;
    amount: string;
    chain?: string;
}
export interface WithdrawResult {
    txHash: string;
    explorerUrl: string;
    status: string;
}
export interface SwapQuoteRequest {
    fromToken: string;
    toToken: string;
    amount: string;
}
export interface SwapQuoteResult {
    inputAmount: string;
    outputAmount: string;
    outputAmountRaw: string;
    priceImpact: number;
    slippageBps: number;
    route: string;
}
export interface SwapRequest {
    fromToken: string;
    toToken: string;
    amount: string;
    slippage?: number;
    reason?: string;
}
export interface SwapResult {
    txHash: string;
    explorerUrl: string;
    status: string;
    inputAmount: string;
    outputAmount: string;
}
export interface PredictionMarket {
    ticker: string;
    title: string;
    category: string;
    status: string;
    yesPrice: number;
    noPrice: number;
    volume: number;
    expiresAt: string;
}
export interface PredictionMarketsQuery {
    category?: string;
    status?: string;
    search?: string;
    limit?: number;
}
export interface PredictionTradeRequest {
    marketTicker: string;
    outcome: 'yes' | 'no';
    amount: string;
    reason?: string;
}
export interface PredictionTradeResult {
    txHash: string;
    explorerUrl: string;
    status: string;
    marketTicker: string;
    outcome: string;
    amount: string;
}
export interface PredictionPosition {
    marketTicker: string;
    title: string;
    outcome: string;
    amount: string;
    currentPrice: number;
    status: string;
}
export interface PredictionWallet {
    exists: boolean;
    address?: string;
    kycVerified?: boolean;
    balance?: {
        usdc: string;
        sol: string;
    };
}
export interface CardPurchaseRequest {
    merchant: string;
    amount: string;
    currency?: string;
    reason?: string;
}
export interface CardPurchaseResult {
    id: string;
    status: string;
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
    expiresIn?: number;
}
export interface CardBalance {
    balance: string;
    currency: string;
    status: string;
}
export interface CardCheckRequest {
    merchant: string;
    amount: string;
}
export interface CardCheckResult {
    allowed: boolean;
    reason?: string;
}
export interface Rules {
    mode: string;
    perTxLimit: number;
    dailyLimit: number;
    weeklyLimit: number;
    dailyUsed: number;
    weeklyUsed: number;
    swapsEnabled: boolean;
    predictionsEnabled: boolean;
    cardsEnabled: boolean;
    [key: string]: unknown;
}
export interface RulesUpdate {
    [key: string]: unknown;
}
export interface Agent {
    id: string;
    name: string;
    status: string;
    chain: string;
    txCount: number;
    totalSpent: number;
    createdAt: string;
}
export interface GoatAction {
    name: string;
    description: string;
    params: Record<string, unknown>;
}
export interface GoatExecuteRequest {
    action: string;
    params: Record<string, unknown>;
}
export interface GoatExecuteResult {
    success: boolean;
    result: unknown;
}
export interface PartnerOnboardRequest {
    externalUserId: string;
    chain?: string;
    agentName?: string;
    rulesPreset?: 'lockdown' | 'balanced' | 'power_user';
    label?: string;
}
export interface PartnerOnboardResult {
    apiKey: string;
    agentId: string;
    walletAddress: string;
    chain: string;
    externalUserId: string;
    existing?: boolean;
}
export interface PartnerAgent {
    agentId: string;
    externalUserId: string;
    label: string;
    status: string;
    chain: string;
    walletAddress: string;
    txCount: number;
    totalSpent: number;
    createdAt: string;
}
export interface PartnerAgentDetail extends PartnerAgent {
    name: string;
    apiKey: string;
    rules: {
        mode: string;
        perTxLimit: number;
        dailyLimit: number;
        swapsEnabled: boolean;
        predictionsEnabled: boolean;
        cardsEnabled: boolean;
    };
}
export interface PartnerAgentList {
    agents: PartnerAgent[];
    total: number;
    limit: number;
    offset: number;
}
export interface PartnerUsage {
    partnerId: string;
    tier: string;
    maxAgents: number;
    totalAgents: number;
    activeAgents: number;
    frozenAgents: number;
    revokedAgents: number;
    totalTransactions: number;
    totalSpent: number;
}
export interface ClawVaultConfig {
    apiKey: string;
    baseUrl?: string;
}
export interface ApiEnvelope {
    success?: boolean;
    data?: unknown;
    error?: {
        code: string;
        message: string;
    };
}
//# sourceMappingURL=types.d.ts.map