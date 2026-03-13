import type { HttpClient } from '../client.js';
import type { Vault, VaultBalance, VaultCreateRequest, VaultCreateResult, WithdrawRequest, WithdrawResult } from '../types.js';
export declare class VaultModule {
    private http;
    constructor(http: HttpClient);
    /** Get all vaults for the authenticated user */
    get(): Promise<Vault[]>;
    /** Alias for get() */
    list(): Promise<Vault[]>;
    /** Create a new vault */
    create(params?: VaultCreateRequest): Promise<VaultCreateResult>;
    /** Get balance for a specific vault address */
    balance(address: string, chain?: string): Promise<VaultBalance>;
    /** Withdraw funds from a vault */
    withdraw(params: WithdrawRequest): Promise<WithdrawResult>;
}
//# sourceMappingURL=vault.d.ts.map