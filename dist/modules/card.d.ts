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
    /** Get a card transaction by ID */
    getTransaction(id: string): Promise<any>;
    /** List card transactions */
    listTransactions(limit?: number): Promise<any>;
}
//# sourceMappingURL=card.d.ts.map