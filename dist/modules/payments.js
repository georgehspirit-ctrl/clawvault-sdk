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
    /** List payments with optional filters */
    async list(params) {
        const query = typeof params === 'number' ? { limit: params } : params || {};
        const qs = new URLSearchParams();
        if (query.limit)
            qs.set('limit', String(query.limit));
        if (query.status)
            qs.set('status', query.status);
        const qsStr = qs.toString();
        const raw = await this.http.request('GET', `/v1/payments${qsStr ? '?' + qsStr : ''}`);
        // Normalize: API returns "items", SDK also exposes "payments" alias
        const items = raw.items || raw.payments || [];
        return { ...raw, items, payments: items };
    }
    /** Approve a pending payment */
    async approve(id) {
        return this.http.request('POST', `/v1/payments/${id}/approve`);
    }
    /** Deny a pending payment */
    async deny(id) {
        return this.http.request('POST', `/v1/payments/${id}/deny`);
    }
    /** Dry-run check — will this payment auto-approve? */
    async check(params) {
        return this.http.request('POST', '/v1/rules/check', params);
    }
}
//# sourceMappingURL=payments.js.map