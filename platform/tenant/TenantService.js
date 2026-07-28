const RavasonTenantService = {

    create(data = {}) {

        const tenant =
            RavasonTenantModel.create(
                data
            );


        if (
            !RavasonTenantModel.validate(
                tenant
            )
        ) {

            throw new Error(
                "Invalid tenant data."
            );

        }


        return RavasonTenantStorageService.save(
            tenant
        );

    },


    get(
        tenantId
    ) {

        return RavasonTenantStorageService.get(
            tenantId
        );

    },


    getAll() {

        return RavasonTenantStorageService.getAll();

    },


    update(
        tenantId,
        updates = {}
    ) {

        const tenant =
            this.get(
                tenantId
            );


        if (
            !tenant
        ) {

            return null;

        }


        Object.assign(

            tenant,

            updates,

            {

                updatedAt:
                    new Date()
                        .toISOString()

            }

        );


        return RavasonTenantStorageService.save(
            tenant
        );

    },


    delete(
        tenantId
    ) {

        return RavasonTenantStorageService.delete(
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


window.RavasonTenantService =
    RavasonTenantService;
