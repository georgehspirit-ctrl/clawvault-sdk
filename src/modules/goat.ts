import type { HttpClient } from '../client.js';
import type { GoatAction, GoatExecuteRequest, GoatExecuteResult } from '../types.js';

export class Goat {
  constructor(private http: HttpClient) {}

  /** List available GOAT actions */
  async actions(): Promise<GoatAction[]> {
    return this.http.request<GoatAction[]>('GET', '/v1/goat/actions');
  }

  /** Get GOAT rules for a category */
  async rules(category: string): Promise<unknown> {
    return this.http.request('GET', `/v1/goat/rules/${category}`);
  }

  /** Execute a GOAT action */
  async execute(params: GoatExecuteRequest): Promise<GoatExecuteResult> {
    return this.http.request<GoatExecuteResult>('POST', '/v1/goat/execute', params);
  }
}
