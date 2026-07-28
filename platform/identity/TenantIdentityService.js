const RavasonTenantIdentityService = {

    create(data = {}) {

        if (
            !window.RavasonTenantModel
        ) {

            throw new Error(
                "TenantModel is not available."
            );

        }

        const tenant =
            RavasonTenantModel.create(
                data
            );

        return RavasonIdentityService.create(
            tenant
        );

    },


    get(tenantId) {

        const identity =
            RavasonIdentityService.get(
                tenantId
            );

        if (
            !identity ||
            identity.identityType !==
                "tenant"
        ) {

            return null;

        }

        return identity;

    },


    getAll() {

        return RavasonIdentityService
            .getAll()
            .filter(

                identity =>

                    identity.identityType ===
                    "tenant"

            );

    },


    update(
        tenantId,
        updates = {}
    ) {

        return RavasonIdentityService.update(

            tenantId,

            updates

        );

    },


    delete(
        tenantId
    ) {

        return RavasonIdentityService.delete(
            tenantId
        );

    },


    exists(
        tenantId
    ) {

        return this.get(
            tenantId
        ) !== null;

    }

};

window.RavasonTenantIdentityService =
    RavasonTenantIdentityService;
