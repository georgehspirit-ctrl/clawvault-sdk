export class Agents {
    http;
    constructor(http) {
        this.http = http;
    }
    /** List agents for the authenticated user */
    async list() {
        return this.http.request('GET', '/v1/agents');
    }
    /** Freeze an agent by ID */
    async freeze(agentId) {
        return this.http.request('POST', `/v1/agents/${agentId}/freeze`);
    }
}
//# sourceMappingURL=agents.js.map