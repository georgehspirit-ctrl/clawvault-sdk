import type { HttpClient } from '../client.js';
import type { Payment, PaymentRequest, PaymentCheckRequest, PaymentCheckResult, PaymentList } from '../types.js';

export class Payments {
  constructor(private http: HttpClient) {}

  /** Request a payment through ClawVault */
  async request(params: PaymentRequest): Promise<Payment> {
    return this.http.request<Payment>('POST', '/v1/payments', params);
  }

  /** Get a payment by ID */
  async get(id: string): Promise<Payment> {
    return this.http.request<Payment>('GET', `/v1/payments/${id}`);
  }

  /** List payments */
  async list(limit = 20): Promise<PaymentList> {
    return this.http.request<PaymentList>('GET', `/v1/payments?limit=${limit}`);
  }

  /** Dry-run check — will this payment auto-approve? */
  async check(params: PaymentCheckRequest): Promise<PaymentCheckResult> {
    return this.http.request<PaymentCheckResult>('POST', '/v1/rules/check', params);
  }
}
