const RavasonAuthenticationConstants = {

    SESSION_STATUS: {

        ACTIVE:
            "active",

        EXPIRED:
            "expired",

        TERMINATED:
            "terminated"

    },


    LOGIN_RESULT: {

        SUCCESS:
            "success",

        FAILED:
            "failed",

        LOCKED:
            "locked",

        DISABLED:
            "disabled"

    },


    TOKEN_TYPE: {

        ACCESS:
            "access",

        REFRESH:
            "refresh"

    },


    DEFAULTS: {

        MAX_LOGIN_ATTEMPTS:
            5,

        SESSION_TIMEOUT_MINUTES:
            30,

        REFRESH_TOKEN_DAYS:
            30

    }

};

window.RavasonAuthenticationConstants =
    RavasonAuthenticationConstants;
