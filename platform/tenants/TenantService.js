const RavasonTenantService = {

    STORAGE_KEY:
        "ravason_platform_tenants",

    CURRENT_TENANT_KEY:
        "ravason_current_tenant_id",


    createTenant(data = {}) {

        const tenants =
            this.getTenants();


        const tenant = {

            id:
                data.id ||
                this.generateId(
                    "tenant"
                ),

            name:
                data.name ||
                "Unnamed Tenant",

            status:
                data.status ||
                "active",

            createdAt:
                data.createdAt ||
                new Date().toISOString(),

            products:
                Array.isArray(
                    data.products
                )
                    ? [
                        ...data.products
                    ]
                    : []

        };


        tenants.push(
            tenant
        );


        const saved =
            this.saveTenants(
                tenants
            );


        if (
            saved &&
            !this.getCurrentTenantId()
        ) {

            this.setCurrentTenant(
                tenant.id
            );

        }


        return saved
            ? tenant
            : null;

    },


    getTenants() {

        const tenants =
            RavasonStorageService.get(
                this.STORAGE_KEY
            );


        if (
            !Array.isArray(
                tenants
            )
        ) {

            return [];

        }


        return tenants;

    },


    saveTenants(tenants) {

        if (
            !Array.isArray(
                tenants
            )
        ) {

            return false;

        }


        return RavasonStorageService.set(

            this.STORAGE_KEY,

            tenants

        );

    },


    getTenant(tenantId) {

        if (
            !tenantId
        ) {

            return null;

        }


        return this
            .getTenants()
            .find(

                tenant =>
                    tenant.id ===
                    tenantId

            ) || null;

    },


    getCurrentTenantId() {

        return RavasonStorageService.get(

            this.CURRENT_TENANT_KEY

        );

    },


    getCurrentTenant() {

        const tenantId =
            this.getCurrentTenantId();


        return this.getTenant(
            tenantId
        );

    },


    setCurrentTenant(tenantId) {

        const tenant =
            this.getTenant(
                tenantId
            );


        if (
            !tenant
        ) {

            return false;

        }


        return RavasonStorageService.set(

            this.CURRENT_TENANT_KEY,

            tenant.id

        );

    },


    attachProduct(
        tenantId,
        productId
    ) {

        const tenants =
            this.getTenants();


        const tenant =
            tenants.find(

                item =>
                    item.id ===
                    tenantId

            );


        if (
            !tenant
        ) {

            return false;

        }


        if (
            !Array.isArray(
                tenant.products
            )
        ) {

            tenant.products = [];

        }


        if (
            !tenant.products.includes(
                productId
            )
        ) {

            tenant.products.push(
                productId
            );

        }


        return this.saveTenants(
            tenants
        );

    },


    tenantHasProduct(
        tenantId,
        productId
    ) {

        const tenant =
            this.getTenant(
                tenantId
            );


        if (
            !tenant
        ) {

            return false;

        }


        return Array.isArray(
            tenant.products
        ) &&
        tenant.products.includes(
            productId
        );

    },


    generateId(prefix) {

        if (
            window.crypto &&
            typeof window.crypto.randomUUID ===
                "function"
        ) {

            return prefix +
                "-" +
                window.crypto.randomUUID();

        }


        return prefix +
            "-" +
            Date.now() +
            "-" +
            Math.random()
                .toString(
                    36
                )
                .slice(
                    2
                );

    },


    clearCurrentTenant() {

        RavasonStorageService.remove(

            this.CURRENT_TENANT_KEY

        );

    }

};


window.RavasonTenantService =
    RavasonTenantService;
