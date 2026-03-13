import { Payments } from './modules/payments.js';
import { VaultModule } from './modules/vault.js';
import { Swap } from './modules/swap.js';
import { Predictions } from './modules/predictions.js';
import { Card } from './modules/card.js';
import { RulesModule } from './modules/rules.js';
import { Agents } from './modules/agents.js';
import { Goat } from './modules/goat.js';
import { PartnerModule } from './modules/partner.js';
import type { ClawVaultConfig } from './types.js';
export interface HttpClient {
    request<T>(method: string, path: string, body?: unknown): Promise<T>;
}
export declare class ClawVault implements HttpClient {
    private readonly apiKey;
    private readonly baseUrl;
    readonly payments: Payments;
    readonly vault: VaultModule;
    readonly swap: Swap;
    readonly predictions: Predictions;
    readonly card: Card;
    readonly rules: RulesModule;
    readonly agents: Agents;
    readonly goat: Goat;
    readonly partner: PartnerModule;
    constructor(config: ClawVaultConfig);
    /** Core HTTP client — unwraps { success, data, error } envelope */
    request<T>(method: string, path: string, body?: unknown): Promise<T>;
    /** Check if the current key is a partner key */
    get isPartnerKey(): boolean;
    /** Check if the current key is an agent key */
    get isAgentKey(): boolean;
}
//# sourceMappingURL=client.d.ts.map