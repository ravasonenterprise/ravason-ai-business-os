const RavasonIdentityConstants = {

    TYPES: {

        PLATFORM: "platform",

        ORGANIZATION: "organization",

        USER: "user",

        DEVICE: "device",

        SESSION: "session"

    },



    STATUSES: {

        ACTIVE: "active",

        INACTIVE: "inactive",

        PENDING: "pending",

        SUSPENDED: "suspended",

        LOCKED: "locked",

        DELETED: "deleted"

    },



    ROLES: {

        OWNER: "owner",

        SUPER_ADMIN: "super-admin",

        ADMIN: "admin",

        MANAGER: "manager",

        STAFF: "staff",

        CUSTOMER: "customer"

    }

};


window.RavasonIdentityConstants =
    RavasonIdentityConstants;
