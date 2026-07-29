const RavasonLicenseConstants = {

    LICENSE_TYPES: {

        TRIAL:
            "trial",

        SUBSCRIPTION:
            "subscription",

        ENTERPRISE:
            "enterprise",

        OFFLINE:
            "offline"

    },


    LICENSE_STATUS: {

        PENDING:
            "pending",

        ACTIVE:
            "active",

        EXPIRED:
            "expired",

        SUSPENDED:
            "suspended",

        REVOKED:
            "revoked"

    },


    ACTIVATION_STATUS: {

        ACTIVATED:
            "activated",

        NOT_ACTIVATED:
            "not_activated"

    },


    VALIDATION_RESULT: {

        VALID:
            "valid",

        INVALID:
            "invalid"

    },


    DEFAULTS: {

        TRIAL_DAYS:
            14,

        MAX_DEVICES:
            1

    }

};


window.RavasonLicenseConstants =
    RavasonLicenseConstants;
