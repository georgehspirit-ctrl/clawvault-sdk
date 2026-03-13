export class Goat {
    http;
    constructor(http) {
        this.http = http;
    }
    /** List available GOAT actions */
    async actions() {
        return this.http.request('GET', '/v1/goat/actions');
    }
    /** Get GOAT rules for a category */
    async rules(category) {
        return this.http.request('GET', `/v1/goat/rules/${category}`);
    }
    /** Execute a GOAT action */
    async execute(params) {
        return this.http.request('POST', '/v1/goat/execute', params);
    }
}
//# sourceMappingURL=goat.js.map