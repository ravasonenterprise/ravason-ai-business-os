/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseConstants.js
 */

const LicenseConstants = Object.freeze({

    STATUS: Object.freeze({

        PENDING: "pending",
        ACTIVE: "active",
        SUSPENDED: "suspended",
        EXPIRED: "expired",
        REVOKED: "revoked"

    }),

    LICENSE_TYPES: Object.freeze({

        TRIAL: "trial",
        SUBSCRIPTION: "subscription",
        LIFETIME: "lifetime"

    }),

    ACTIVATION_TYPES: Object.freeze({

        ONLINE: "online",
        OFFLINE: "offline"

    }),

    DEVICE_STATUS: Object.freeze({

        REGISTERED: "registered",
        REMOVED: "removed"

    }),

    DEFAULT_MAX_DEVICES: 1

});

module.exports =
    LicenseConstants;
