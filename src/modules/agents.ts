import type { HttpClient } from '../client.js';
import type { Agent } from '../types.js';

export class Agents {
  constructor(private http: HttpClient) {}

  /** List agents for the authenticated user */
  async list(): Promise<Agent[]> {
    return this.http.request<Agent[]>('GET', '/v1/agents');
  }

  /** Freeze an agent by ID */
  async freeze(agentId: string): Promise<{ agentId: string; status: string }> {
    return this.http.request('POST', `/v1/agents/${agentId}/freeze`);
  }
}
