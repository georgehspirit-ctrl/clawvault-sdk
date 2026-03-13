import type { HttpClient } from '../client.js';
import type { Vault, VaultBalance, VaultCreateRequest, VaultCreateResult, WithdrawRequest, WithdrawResult } from '../types.js';

export class VaultModule {
  constructor(private http: HttpClient) {}

  /** Get all vaults for the authenticated user */
  async get(): Promise<Vault[]> {
    return this.http.request<Vault[]>('GET', '/v1/vaults');
  }

  /** Create a new vault */
  async create(params?: VaultCreateRequest): Promise<VaultCreateResult> {
    return this.http.request<VaultCreateResult>('POST', '/v1/vault/create', params || {});
  }

  /** Get balance for a specific vault address */
  async balance(address: string, chain?: string): Promise<VaultBalance> {
    const qs = chain ? `?chain=${chain}` : '';
    return this.http.request<VaultBalance>('GET', `/v1/vault/balance/${address}${qs}`);
  }

  /** Withdraw funds from a vault */
  async withdraw(params: WithdrawRequest): Promise<WithdrawResult> {
    return this.http.request<WithdrawResult>('POST', '/v1/vault/withdraw', params);
  }
}
