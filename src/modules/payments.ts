import type { HttpClient } from '../client.js';
import type { Payment, PaymentRequest, PaymentCheckRequest, PaymentCheckResult, PaymentList, PaymentListQuery } from '../types.js';

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

  /** List payments with optional filters */
  async list(params?: PaymentListQuery | number): Promise<PaymentList> {
    const query = typeof params === 'number' ? { limit: params } : params || {};
    const qs = new URLSearchParams();
    if (query.limit) qs.set('limit', String(query.limit));
    if (query.status) qs.set('status', query.status);
    const qsStr = qs.toString();
    const raw = await this.http.request<any>('GET', `/v1/payments${qsStr ? '?' + qsStr : ''}`);
    // Normalize: API returns "items", SDK also exposes "payments" alias
    const items = raw.items || raw.payments || [];
    return { ...raw, items, payments: items };
  }

  /** Approve a pending payment */
  async approve(id: string): Promise<Payment> {
    return this.http.request<Payment>('POST', `/v1/payments/${id}/approve`);
  }

  /** Deny a pending payment */
  async deny(id: string): Promise<Payment> {
    return this.http.request<Payment>('POST', `/v1/payments/${id}/deny`);
  }

  /** Dry-run check — will this payment auto-approve? */
  async check(params: PaymentCheckRequest): Promise<PaymentCheckResult> {
    return this.http.request<PaymentCheckResult>('POST', '/v1/rules/check', params);
  }
}
