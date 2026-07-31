/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * IdentityConstants.js
 */

module.exports = Object.freeze({

    USER_STATUS: Object.freeze({

        ACTIVE: "ACTIVE",

        INACTIVE: "INACTIVE",

        LOCKED: "LOCKED",

        PENDING: "PENDING",

        DISABLED: "DISABLED"

    }),

    USER_TYPES: Object.freeze({

        OWNER: "OWNER",

        SUPER_ADMIN: "SUPER_ADMIN",

        ADMIN: "ADMIN",

        MANAGER: "MANAGER",

        STAFF: "STAFF",

        CUSTOMER: "CUSTOMER"

    }),

    SESSION_STATUS: Object.freeze({

        ACTIVE: "ACTIVE",

        EXPIRED: "EXPIRED",

        TERMINATED: "TERMINATED"

    }),

    MFA_METHODS: Object.freeze({

        NONE: "NONE",

        EMAIL: "EMAIL",

        SMS: "SMS",

        TOTP: "TOTP",

        AUTHENTICATOR: "AUTHENTICATOR"

    }),

    PASSWORD: Object.freeze({

        MIN_LENGTH: 12,

        MAX_LENGTH: 128

    })

});
