import type { HttpClient } from '../client.js';
import type {
  PredictionMarket, PredictionMarketsQuery, PredictionTradeRequest,
  PredictionTradeResult, PredictionPosition, PredictionWallet,
} from '../types.js';

export class Predictions {
  constructor(private http: HttpClient) {}

  /** List prediction markets */
  async markets(query?: PredictionMarketsQuery): Promise<PredictionMarket[]> {
    const params = new URLSearchParams();
    if (query?.category) params.set('category', query.category);
    if (query?.status) params.set('status', query.status);
    if (query?.search) params.set('search', query.search);
    if (query?.limit) params.set('limit', String(query.limit));
    const qs = params.toString();
    return this.http.request<PredictionMarket[]>('GET', `/v1/prediction/markets${qs ? `?${qs}` : ''}`);
  }

  /** Get a specific market by ticker */
  async market(ticker: string): Promise<PredictionMarket> {
    return this.http.request<PredictionMarket>('GET', `/v1/prediction/markets/${ticker}`);
  }

  /** Buy a prediction outcome */
  async buy(params: PredictionTradeRequest): Promise<PredictionTradeResult> {
    return this.http.request<PredictionTradeResult>('POST', '/v1/prediction/buy', params);
  }

  /** Sell a prediction position */
  async sell(params: PredictionTradeRequest): Promise<PredictionTradeResult> {
    return this.http.request<PredictionTradeResult>('POST', '/v1/prediction/sell', params);
  }

  /** Redeem a settled prediction */
  async redeem(params: PredictionTradeRequest): Promise<PredictionTradeResult> {
    return this.http.request<PredictionTradeResult>('POST', '/v1/prediction/redeem', params);
  }

  /** Get on-chain prediction positions */
  async positions(): Promise<PredictionPosition[]> {
    return this.http.request<PredictionPosition[]>('GET', '/v1/prediction/positions');
  }

  /** Check prediction wallet status (exists, KYC, balance) */
  async wallet(): Promise<PredictionWallet> {
    return this.http.request<PredictionWallet>('GET', '/v1/prediction/wallet');
  }

  /** List prediction market categories */
  async categories(): Promise<string[]> {
    return this.http.request<string[]>('GET', '/v1/prediction/categories');
  }
}
