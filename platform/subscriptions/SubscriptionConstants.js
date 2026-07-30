/**
 * Ravason Enterprise
 * Platform Subscription Foundation
 *
 * SubscriptionConstants.js
 */

const SubscriptionConstants = Object.freeze({

    STATUS: Object.freeze({

        TRIAL: "trial",
        ACTIVE: "active",
        SUSPENDED: "suspended",
        EXPIRED: "expired",
        CANCELLED: "cancelled"

    }),

    BILLING_CYCLE: Object.freeze({

        DAILY: "daily",
        WEEKLY: "weekly",
        MONTHLY: "monthly",
        QUARTERLY: "quarterly",
        YEARLY: "yearly",
        LIFETIME: "lifetime"

    }),

    PLAN_TYPES: Object.freeze({

        FREE: "free",
        STARTER: "starter",
        PRO: "pro",
        ENTERPRISE: "enterprise"

    }),

    AI_TIERS: Object.freeze({

        ZERO: "zero-ai",
        MEDIUM: "medium-ai",
        FULL: "full-ai"

    }),

    ENTITLEMENT_STATUS: Object.freeze({

        ENABLED: "enabled",
        DISABLED: "disabled",
        LIMITED: "limited"

    }),

    DEFAULT_TRIAL_DAYS: 14

});

module.exports =
    SubscriptionConstants;
