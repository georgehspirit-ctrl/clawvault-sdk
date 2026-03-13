import type { HttpClient } from '../client.js';
import type { Payment, PaymentRequest, PaymentCheckRequest, PaymentCheckResult, PaymentList } from '../types.js';
export declare class Payments {
    private http;
    constructor(http: HttpClient);
    /** Request a payment through ClawVault */
    request(params: PaymentRequest): Promise<Payment>;
    /** Get a payment by ID */
    get(id: string): Promise<Payment>;
    /** List payments */
    list(limit?: number): Promise<PaymentList>;
    /** Dry-run check — will this payment auto-approve? */
    check(params: PaymentCheckRequest): Promise<PaymentCheckResult>;
}
//# sourceMappingURL=payments.d.ts.map