import { ClawVaultError } from './errors.js';
import type { ApiEnvelope } from './types.js';
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

const MAX_RETRIES = 2;
const RETRY_BASE_MS = 500;

export class ClawVault implements HttpClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  // Namespaced modules
  public readonly payments: Payments;
  public readonly vault: VaultModule;
  public readonly swap: Swap;
  public readonly predictions: Predictions;
  public readonly card: Card;
  public readonly rules: RulesModule;
  public readonly agents: Agents;
  public readonly goat: Goat;
  public readonly partner: PartnerModule;

  constructor(config: ClawVaultConfig) {
    if (!config.apiKey) throw new Error('apiKey is required');
    this.apiKey = config.apiKey;
    this.baseUrl = (config.baseUrl || 'https://api.clawvault.cc').replace(/\/$/, '');

    this.payments = new Payments(this);
    this.vault = new VaultModule(this);
    this.swap = new Swap(this);
    this.predictions = new Predictions(this);
    this.card = new Card(this);
    this.rules = new RulesModule(this);
    this.agents = new Agents(this);
    this.goat = new Goat(this);
    this.partner = new PartnerModule(this);
  }

  /** Core HTTP client — unwraps { success, data, error } envelope */
  async request<T>(method: string, path: string, body?: unknown): Promise<T> {
    let lastError: ClawVaultError | null = null;

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      if (attempt > 0) {
        await new Promise(r => setTimeout(r, RETRY_BASE_MS * Math.pow(2, attempt - 1)));
      }

      const res = await fetch(`${this.baseUrl}${path}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      // Retry on 429 or 5xx
      if ((res.status === 429 || res.status >= 500) && attempt < MAX_RETRIES) {
        const json = await res.json().catch((): ApiEnvelope => ({ error: { code: 'UNKNOWN', message: res.statusText } })) as ApiEnvelope;
        lastError = new ClawVaultError(
          json.error?.code || 'UNKNOWN',
          json.error?.message || res.statusText,
          res.status,
        );
        continue;
      }

      const json = await res.json().catch((): ApiEnvelope => ({ error: { code: 'UNKNOWN', message: res.statusText } })) as ApiEnvelope;

      if (!res.ok) {
        throw new ClawVaultError(
          json.error?.code || 'UNKNOWN',
          json.error?.message || res.statusText,
          res.status,
        );
      }

      return (json.data ?? json) as T;
    }

    throw lastError || new ClawVaultError('UNKNOWN', 'Request failed after retries', 500);
  }

  /** Check if the current key is a partner key */
  get isPartnerKey(): boolean {
    return this.apiKey.startsWith('cv_partner_');
  }

  /** Check if the current key is an agent key */
  get isAgentKey(): boolean {
    return this.apiKey.startsWith('cv_live_') || (this.apiKey.startsWith('cv_') && !this.apiKey.startsWith('cv_partner_'));
  }
}
