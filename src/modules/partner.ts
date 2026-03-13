import type { HttpClient } from '../client.js';
import type {
  PartnerOnboardRequest, PartnerOnboardResult,
  PartnerAgentList, PartnerAgentDetail, PartnerUsage,
} from '../types.js';

export class PartnerModule {
  constructor(private http: HttpClient) {}

  /** Onboard a new agent (creates user + wallet + agent + rules in one call) */
  async onboard(params: PartnerOnboardRequest): Promise<PartnerOnboardResult> {
    return this.http.request<PartnerOnboardResult>('POST', '/v1/partner/onboard', params);
  }

  /** List partner's agents */
  async listAgents(limit = 20, offset = 0): Promise<PartnerAgentList> {
    return this.http.request<PartnerAgentList>('GET', `/v1/partner/agents?limit=${limit}&offset=${offset}`);
  }

  /** Get a single agent's details */
  async getAgent(agentId: string): Promise<PartnerAgentDetail> {
    return this.http.request<PartnerAgentDetail>('GET', `/v1/partner/agents/${agentId}`);
  }

  /** Freeze an agent */
  async freezeAgent(agentId: string): Promise<{ agentId: string; status: string }> {
    return this.http.request('POST', `/v1/partner/agents/${agentId}/freeze`);
  }

  /** Unfreeze an agent */
  async unfreezeAgent(agentId: string): Promise<{ agentId: string; status: string }> {
    return this.http.request('POST', `/v1/partner/agents/${agentId}/unfreeze`);
  }

  /** Revoke an agent */
  async revokeAgent(agentId: string): Promise<{ agentId: string; status: string }> {
    return this.http.request('DELETE', `/v1/partner/agents/${agentId}`);
  }

  /** Get aggregate usage stats */
  async usage(): Promise<PartnerUsage> {
    return this.http.request<PartnerUsage>('GET', '/v1/partner/usage');
  }
}
