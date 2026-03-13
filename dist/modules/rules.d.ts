import type { HttpClient } from '../client.js';
import type { Rules, RulesUpdate } from '../types.js';
export declare class RulesModule {
    private http;
    constructor(http: HttpClient);
    /** Get current rules */
    get(): Promise<Rules>;
    /** Update rules */
    update(params: RulesUpdate): Promise<Rules>;
}
//# sourceMappingURL=rules.d.ts.map