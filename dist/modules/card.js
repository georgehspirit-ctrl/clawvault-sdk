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
}
//# sourceMappingURL=card.js.map