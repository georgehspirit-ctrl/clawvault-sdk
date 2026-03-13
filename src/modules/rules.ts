import type { HttpClient } from '../client.js';
import type { Rules, RulesUpdate } from '../types.js';

export class RulesModule {
  constructor(private http: HttpClient) {}

  /** Get current rules */
  async get(): Promise<Rules> {
    return this.http.request<Rules>('GET', '/v1/rules');
  }

  /** Update rules */
  async update(params: RulesUpdate): Promise<Rules> {
    return this.http.request<Rules>('PATCH', '/v1/rules', params);
  }
}
