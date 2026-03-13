export class Payments {
    http;
    constructor(http) {
        this.http = http;
    }
    /** Request a payment through ClawVault */
    async request(params) {
        return this.http.request('POST', '/v1/payments', params);
    }
    /** Get a payment by ID */
    async get(id) {
        return this.http.request('GET', `/v1/payments/${id}`);
    }
    /** List payments */
    async list(limit = 20) {
        return this.http.request('GET', `/v1/payments?limit=${limit}`);
    }
    /** Dry-run check — will this payment auto-approve? */
    async check(params) {
        return this.http.request('POST', '/v1/rules/check', params);
    }
}
//# sourceMappingURL=payments.js.map