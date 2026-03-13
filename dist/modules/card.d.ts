import type { HttpClient } from '../client.js';
import type { CardPurchaseRequest, CardPurchaseResult, CardBalance, CardCheckRequest, CardCheckResult } from '../types.js';
export declare class Card {
    private http;
    constructor(http: HttpClient);
    /** Purchase with the Agent Card */
    purchase(params: CardPurchaseRequest): Promise<CardPurchaseResult>;
    /** Get card balance */
    balance(): Promise<CardBalance>;
    /** Check if a purchase would be allowed */
    check(params: CardCheckRequest): Promise<CardCheckResult>;
}
//# sourceMappingURL=card.d.ts.map