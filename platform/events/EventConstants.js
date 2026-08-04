/**
 * Ravason Enterprise
 * Event Platform
 * EventConstants
 *
 * Defines platform-wide event constants.
 */

const EventConstants = Object.freeze({

    SOURCES: Object.freeze({
        IDENTITY: "identity",
        TENANT: "tenant",
        BILLING: "billing",
        LICENSING: "licensing",
        SUBSCRIPTIONS: "subscriptions",
        NOTIFICATIONS: "notifications",
        AUTOMATION: "automation",
        SYSTEM: "system"
    }),

    PRIORITY: Object.freeze({
        LOW: "low",
        NORMAL: "normal",
        HIGH: "high",
        CRITICAL: "critical"
    }),

    STATUS: Object.freeze({
        PENDING: "pending",
        PROCESSING: "processing",
        COMPLETED: "completed",
        FAILED: "failed"
    }),

    EVENTS: Object.freeze({

        USER_CREATED: "USER_CREATED",
        USER_UPDATED: "USER_UPDATED",
        USER_DELETED: "USER_DELETED",

        LOGIN_SUCCEEDED: "LOGIN_SUCCEEDED",
        LOGIN_FAILED: "LOGIN_FAILED",

        PASSWORD_CHANGED: "PASSWORD_CHANGED",
        MFA_ENABLED: "MFA_ENABLED",

        TENANT_CREATED: "TENANT_CREATED",
        TENANT_UPDATED: "TENANT_UPDATED",

        SUBSCRIPTION_CREATED: "SUBSCRIPTION_CREATED",
        SUBSCRIPTION_UPDATED: "SUBSCRIPTION_UPDATED",

        LICENSE_ACTIVATED: "LICENSE_ACTIVATED",
        LICENSE_EXPIRED: "LICENSE_EXPIRED",

        PAYMENT_COMPLETED: "PAYMENT_COMPLETED",
        PAYMENT_FAILED: "PAYMENT_FAILED"

    })

});

module.exports = EventConstants;
