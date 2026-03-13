export class Predictions {
    http;
    constructor(http) {
        this.http = http;
    }
    /** List prediction markets */
    async markets(query) {
        const params = new URLSearchParams();
        if (query?.category)
            params.set('category', query.category);
        if (query?.status)
            params.set('status', query.status);
        if (query?.search)
            params.set('search', query.search);
        if (query?.limit)
            params.set('limit', String(query.limit));
        const qs = params.toString();
        return this.http.request('GET', `/v1/prediction/markets${qs ? `?${qs}` : ''}`);
    }
    /** Get a specific market by ticker */
    async market(ticker) {
        return this.http.request('GET', `/v1/prediction/markets/${ticker}`);
    }
    /** Buy a prediction outcome */
    async buy(params) {
        return this.http.request('POST', '/v1/prediction/buy', params);
    }
    /** Sell a prediction position */
    async sell(params) {
        return this.http.request('POST', '/v1/prediction/sell', params);
    }
    /** Redeem a settled prediction */
    async redeem(params) {
        return this.http.request('POST', '/v1/prediction/redeem', params);
    }
    /** Get on-chain prediction positions */
    async positions() {
        return this.http.request('GET', '/v1/prediction/positions');
    }
    /** Check prediction wallet status (exists, KYC, balance) */
    async wallet() {
        return this.http.request('GET', '/v1/prediction/wallet');
    }
    /** List prediction market categories */
    async categories() {
        return this.http.request('GET', '/v1/prediction/categories');
    }
}
//# sourceMappingURL=predictions.js.map