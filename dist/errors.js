export var ErrorCode;
(function (ErrorCode) {
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorCode["INVALID_KEY"] = "INVALID_KEY";
    ErrorCode["WRONG_KEY_TYPE"] = "WRONG_KEY_TYPE";
    ErrorCode["RATE_LIMITED"] = "RATE_LIMITED";
    ErrorCode["MISSING_FIELDS"] = "MISSING_FIELDS";
    ErrorCode["INVALID_INPUT"] = "INVALID_INPUT";
    ErrorCode["TIER_LIMIT_EXCEEDED"] = "TIER_LIMIT_EXCEEDED";
    ErrorCode["INSUFFICIENT_BALANCE"] = "INSUFFICIENT_BALANCE";
    ErrorCode["RULE_VIOLATION"] = "RULE_VIOLATION";
    ErrorCode["VAULT_EXISTS"] = "VAULT_EXISTS";
    ErrorCode["VAULT_CREATE_FAILED"] = "VAULT_CREATE_FAILED";
    ErrorCode["SWAP_FAILED"] = "SWAP_FAILED";
    ErrorCode["PREDICTION_FAILED"] = "PREDICTION_FAILED";
    ErrorCode["NO_PREDICTION_WALLET"] = "NO_PREDICTION_WALLET";
    ErrorCode["KYC_REQUIRED"] = "KYC_REQUIRED";
    ErrorCode["MARKET_UNAVAILABLE"] = "MARKET_UNAVAILABLE";
    ErrorCode["MARKET_NOT_FOUND"] = "MARKET_NOT_FOUND";
    ErrorCode["MARKET_CLOSED"] = "MARKET_CLOSED";
    ErrorCode["CARD_FROZEN"] = "CARD_FROZEN";
    ErrorCode["MERCHANT_BLOCKED"] = "MERCHANT_BLOCKED";
    ErrorCode["AGENT_LIMIT"] = "AGENT_LIMIT";
    ErrorCode["PARTNER_SUSPENDED"] = "PARTNER_SUSPENDED";
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    ErrorCode["INTERNAL"] = "INTERNAL";
    ErrorCode["UNKNOWN"] = "UNKNOWN";
})(ErrorCode || (ErrorCode = {}));
export class ClawVaultError extends Error {
    code;
    statusCode;
    constructor(code, message, statusCode) {
        super(message);
        this.name = 'ClawVaultError';
        this.code = code;
        this.statusCode = statusCode;
    }
}
//# sourceMappingURL=errors.js.map