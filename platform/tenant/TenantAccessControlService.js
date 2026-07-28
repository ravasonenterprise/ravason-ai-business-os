const RavasonTenantAccessControlService = {

    canAccess(
        identity,
        tenantId
    ) {

        if (
            !identity ||
            !identity.id ||
            !tenantId
        ) {

            return false;

        }


        return (

            identity.tenantId ===
            tenantId

        );

    },


    validateTenantAccess(
        identity,
        tenant
    ) {

        if (
            !identity ||
            !tenant
        ) {

            return {

                allowed:
                    false,

                reason:
                    "Missing identity or tenant."

            };

        }


        const allowed =
            this.canAccess(
                identity,
                tenant.id
            );


        return {

            allowed,

            identityId:
                identity.id,

            tenantId:
                tenant.id,

            timestamp:
                new Date()
                    .toISOString()

        };

    }

};


window.RavasonTenantAccessControlService =
    RavasonTenantAccessControlService;
