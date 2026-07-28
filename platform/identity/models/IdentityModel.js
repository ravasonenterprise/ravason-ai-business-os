const RavasonIdentityModel = {

    STATUS: {

        ACTIVE:
            "active",

        INACTIVE:
            "inactive",

        SUSPENDED:
            "suspended",

        DELETED:
            "deleted"

    },


    create(data = {}) {

        if (
            !window.RavasonIdentityValidator
        ) {

            throw new Error(
                "IdentityValidator is not available."
            );

        }

        if (
            !RavasonIdentityValidator.isValidIdentifier(
                data.id
            )
        ) {

            throw new Error(
                "A valid identity ID is required."
            );

        }

        if (
            !data.identityType
        ) {

            throw new Error(
                "Identity type is required."
            );

        }

        const now =
            new Date().toISOString();

        return {

            id:
                data.id,

            identityType:
                data.identityType,

            tenantId:
                data.tenantId || null,

            displayName:
                data.displayName || "",

            status:
                data.status ||
                this.STATUS.ACTIVE,

            metadata:
                data.metadata || {},

            createdAt:
                now,

            updatedAt:
                now

        };

    }

};

window.RavasonIdentityModel =
    RavasonIdentityModel;
