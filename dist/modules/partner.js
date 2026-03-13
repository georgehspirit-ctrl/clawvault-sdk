export class PartnerModule {
    http;
    constructor(http) {
        this.http = http;
    }
    /** Onboard a new agent (creates user + wallet + agent + rules in one call) */
    async onboard(params) {
        return this.http.request('POST', '/v1/partner/onboard', params);
    }
    /** List partner's agents */
    async listAgents(limit = 20, offset = 0) {
        return this.http.request('GET', `/v1/partner/agents?limit=${limit}&offset=${offset}`);
    }
    /** Get a single agent's details */
    async getAgent(agentId) {
        return this.http.request('GET', `/v1/partner/agents/${agentId}`);
    }
    /** Freeze an agent */
    async freezeAgent(agentId) {
        return this.http.request('POST', `/v1/partner/agents/${agentId}/freeze`);
    }
    /** Unfreeze an agent */
    async unfreezeAgent(agentId) {
        return this.http.request('POST', `/v1/partner/agents/${agentId}/unfreeze`);
    }
    /** Revoke an agent */
    async revokeAgent(agentId) {
        return this.http.request('DELETE', `/v1/partner/agents/${agentId}`);
    }
    /** Get aggregate usage stats */
    async usage() {
        return this.http.request('GET', '/v1/partner/usage');
    }
}
//# sourceMappingURL=partner.js.map