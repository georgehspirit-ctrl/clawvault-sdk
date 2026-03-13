export class Swap {
    http;
    constructor(http) {
        this.http = http;
    }
    /** Get a swap quote without executing */
    async quote(params) {
        return this.http.request('POST', '/v1/swap/quote', params);
    }
    /** Execute a token swap */
    async execute(params) {
        return this.http.request('POST', '/v1/swap', params);
    }
}
//# sourceMappingURL=swap.js.map