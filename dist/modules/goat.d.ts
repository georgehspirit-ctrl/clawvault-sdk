import type { HttpClient } from '../client.js';
import type { GoatAction, GoatExecuteRequest, GoatExecuteResult } from '../types.js';
export declare class Goat {
    private http;
    constructor(http: HttpClient);
    /** List available GOAT actions */
    actions(): Promise<GoatAction[]>;
    /** Get GOAT rules for a category */
    rules(category: string): Promise<unknown>;
    /** Execute a GOAT action */
    execute(params: GoatExecuteRequest): Promise<GoatExecuteResult>;
}
//# sourceMappingURL=goat.d.ts.map