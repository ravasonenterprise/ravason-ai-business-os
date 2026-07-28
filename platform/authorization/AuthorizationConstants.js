const RavasonAuthorizationConstants = {

    ROLE_TYPES: {

        OWNER:
            "owner",

        SUPER_ADMIN:
            "super_admin",

        ADMIN:
            "admin",

        MANAGER:
            "manager",

        USER:
            "user"

    },


    PERMISSION_ACTIONS: {

        CREATE:
            "create",

        READ:
            "read",

        UPDATE:
            "update",

        DELETE:
            "delete",

        MANAGE:
            "manage"

    },


    ACCESS_RESULT: {

        ALLOWED:
            "allowed",

        DENIED:
            "denied"

    }

};

window.RavasonAuthorizationConstants =
    RavasonAuthorizationConstants;
