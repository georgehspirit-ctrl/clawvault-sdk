import type { HttpClient } from '../client.js';
import type { CardPurchaseRequest, CardPurchaseResult, CardBalance, CardCheckRequest, CardCheckResult } from '../types.js';

export class Card {
  constructor(private http: HttpClient) {}

  /** Purchase with the Agent Card */
  async purchase(params: CardPurchaseRequest): Promise<CardPurchaseResult> {
    return this.http.request<CardPurchaseResult>('POST', '/v1/card/purchase', params);
  }

  /** Get card balance */
  async balance(): Promise<CardBalance> {
    return this.http.request<CardBalance>('GET', '/v1/card/balance');
  }

  /** Check if a purchase would be allowed */
  async check(params: CardCheckRequest): Promise<CardCheckResult> {
    return this.http.request<CardCheckResult>('POST', '/v1/card/check', params);
  }
}
