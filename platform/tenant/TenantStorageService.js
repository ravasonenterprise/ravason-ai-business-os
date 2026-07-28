const RavasonTenantStorageService = {

    tenants: [],


    save(tenant) {

        const existing =
            this.get(
                tenant.id
            );


        if (existing) {

            Object.assign(
                existing,
                tenant,
                {
                    updatedAt:
                        new Date()
                            .toISOString()
                }
            );

            return existing;

        }


        this.tenants.push(
            tenant
        );


        return tenant;

    },


    get(
        tenantId
    ) {

        return (

            this.tenants.find(

                tenant =>
                    tenant.id === tenantId

            ) || null

        );

    },


    getAll() {

        return [
            ...this.tenants
        ];

    },


    delete(
        tenantId
    ) {

        const index =
            this.tenants.findIndex(

                tenant =>
                    tenant.id === tenantId

            );


        if (
            index === -1
        ) {

            return false;

        }


        this.tenants.splice(
            index,
            1
        );


        return true;

    },


    clear() {

        this.tenants = [];

        return true;

    }

};


window.RavasonTenantStorageService =
    RavasonTenantStorageService;
