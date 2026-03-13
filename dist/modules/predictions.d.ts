import type { HttpClient } from '../client.js';
import type { PredictionMarket, PredictionMarketsQuery, PredictionTradeRequest, PredictionTradeResult, PredictionPosition, PredictionWallet } from '../types.js';
export declare class Predictions {
    private http;
    constructor(http: HttpClient);
    /** List prediction markets */
    markets(query?: PredictionMarketsQuery): Promise<PredictionMarket[]>;
    /** Get a specific market by ticker */
    market(ticker: string): Promise<PredictionMarket>;
    /** Buy a prediction outcome */
    buy(params: PredictionTradeRequest): Promise<PredictionTradeResult>;
    /** Sell a prediction position */
    sell(params: PredictionTradeRequest): Promise<PredictionTradeResult>;
    /** Redeem a settled prediction */
    redeem(params: PredictionTradeRequest): Promise<PredictionTradeResult>;
    /** Get on-chain prediction positions */
    positions(): Promise<PredictionPosition[]>;
    /** Check prediction wallet status (exists, KYC, balance) */
    wallet(): Promise<PredictionWallet>;
}
//# sourceMappingURL=predictions.d.ts.map