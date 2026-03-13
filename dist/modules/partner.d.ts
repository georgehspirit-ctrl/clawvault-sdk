import type { HttpClient } from '../client.js';
import type { PartnerOnboardRequest, PartnerOnboardResult, PartnerAgentList, PartnerAgentDetail, PartnerUsage } from '../types.js';
export declare class PartnerModule {
    private http;
    constructor(http: HttpClient);
    /** Onboard a new agent (creates user + wallet + agent + rules in one call) */
    onboard(params: PartnerOnboardRequest): Promise<PartnerOnboardResult>;
    /** List partner's agents */
    listAgents(limit?: number, offset?: number): Promise<PartnerAgentList>;
    /** Get a single agent's details */
    getAgent(agentId: string): Promise<PartnerAgentDetail>;
    /** Freeze an agent */
    freezeAgent(agentId: string): Promise<{
        agentId: string;
        status: string;
    }>;
    /** Unfreeze an agent */
    unfreezeAgent(agentId: string): Promise<{
        agentId: string;
        status: string;
    }>;
    /** Revoke an agent */
    revokeAgent(agentId: string): Promise<{
        agentId: string;
        status: string;
    }>;
    /** Get aggregate usage stats */
    usage(): Promise<PartnerUsage>;
}
//# sourceMappingURL=partner.d.ts.map