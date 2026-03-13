import type { HttpClient } from '../client.js';
import type { SwapQuoteRequest, SwapQuoteResult, SwapRequest, SwapResult } from '../types.js';
export declare class Swap {
    private http;
    constructor(http: HttpClient);
    /** Get a swap quote without executing */
    quote(params: SwapQuoteRequest): Promise<SwapQuoteResult>;
    /** Execute a token swap */
    execute(params: SwapRequest): Promise<SwapResult>;
}
//# sourceMappingURL=swap.d.ts.map