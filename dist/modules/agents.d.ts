import type { HttpClient } from '../client.js';
import type { Agent } from '../types.js';
export declare class Agents {
    private http;
    constructor(http: HttpClient);
    /** List agents for the authenticated user */
    list(): Promise<Agent[]>;
    /** Freeze an agent by ID */
    freeze(agentId: string): Promise<{
        agentId: string;
        status: string;
    }>;
}
//# sourceMappingURL=agents.d.ts.map