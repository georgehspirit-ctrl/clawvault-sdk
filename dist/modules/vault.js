export class VaultModule {
    http;
    constructor(http) {
        this.http = http;
    }
    /** Get all vaults for the authenticated user */
    async get() {
        return this.http.request('GET', '/v1/vaults');
    }
    /** Create a new vault */
    async create(params) {
        return this.http.request('POST', '/v1/vault/create', params || {});
    }
    /** Get balance for a specific vault address */
    async balance(address, chain) {
        const qs = chain ? `?chain=${chain}` : '';
        return this.http.request('GET', `/v1/vault/balance/${address}${qs}`);
    }
    /** Withdraw funds from a vault */
    async withdraw(params) {
        return this.http.request('POST', '/v1/vault/withdraw', params);
    }
}
//# sourceMappingURL=vault.js.map