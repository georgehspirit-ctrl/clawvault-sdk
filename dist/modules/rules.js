export class RulesModule {
    http;
    constructor(http) {
        this.http = http;
    }
    /** Get current rules */
    async get() {
        return this.http.request('GET', '/v1/rules');
    }
    /** Update rules */
    async update(params) {
        return this.http.request('PATCH', '/v1/rules', params);
    }
}
//# sourceMappingURL=rules.js.map