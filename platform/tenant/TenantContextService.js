const RavasonTenantContextService = {

    currentTenant: null,


    setTenant(
        tenant
    ) {

        if (
            !tenant ||
            !tenant.id
        ) {

            throw new Error(
                "Valid tenant is required."
            );

        }


        this.currentTenant =
            tenant;


        return this.currentTenant;

    },


    getTenant() {

        return this.currentTenant;

    },


    getTenantId() {

        if (
            !this.currentTenant
        ) {

            return null;

        }


        return this.currentTenant.id;

    },


    hasTenant() {

        return (
            this.currentTenant !== null
        );

    },


    clear() {

        this.currentTenant =
            null;


        return true;

    }

};


window.RavasonTenantContextService =
    RavasonTenantContextService;
