import type { HttpClient } from '../client.js';
import type { SwapQuoteRequest, SwapQuoteResult, SwapRequest, SwapResult } from '../types.js';

export class Swap {
  constructor(private http: HttpClient) {}

  /** Get a swap quote without executing */
  async quote(params: SwapQuoteRequest): Promise<SwapQuoteResult> {
    return this.http.request<SwapQuoteResult>('POST', '/v1/swap/quote', params);
  }

  /** Execute a token swap */
  async execute(params: SwapRequest): Promise<SwapResult> {
    return this.http.request<SwapResult>('POST', '/v1/swap', params);
  }
}
