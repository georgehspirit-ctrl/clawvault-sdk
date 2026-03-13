export class Card {
    http;
    constructor(http) {
        this.http = http;
    }
    /** Purchase with the Agent Card */
    async purchase(params) {
        return this.http.request('POST', '/v1/card/purchase', params);
    }
    /** Get card balance */
    async balance() {
        return this.http.request('GET', '/v1/card/balance');
    }
    /** Check if a purchase would be allowed */
    async check(params) {
        return this.http.request('POST', '/v1/card/check', params);
    }
    /** Get a card transaction by ID */
    async getTransaction(id) {
        return this.http.request('GET', `/v1/card/transactions/${id}`);
    }
    /** List card transactions */
    async listTransactions(limit = 20) {
        return this.http.request('GET', `/v1/card/transactions?limit=${limit}`);
    }
}
//# sourceMappingURL=card.js.map