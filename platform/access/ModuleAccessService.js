const RavasonModuleAccessService = {

    isModuleRegistered(
        moduleId
    ) {

        if (
            !moduleId
        ) {

            return false;

        }


        if (
            !window.RavasonPlatformRegistry
        ) {

            return false;

        }


        const registry =
            window.RavasonPlatformRegistry;


        if (
            typeof registry.MODULES !==
                "object"
        ) {

            return false;

        }


        return Object.values(
            registry.MODULES
        ).includes(
            moduleId
        );

    },


    requireRegisteredModule(
        moduleId
    ) {

        if (
            !this.isModuleRegistered(
                moduleId
            )
        ) {

            throw new Error(

                "Module is not registered: " +
                moduleId

            );

        }


        return true;

    },


    productHasModule(
        productId,
        moduleId
    ) {

        this.requireRegisteredModule(
            moduleId
        );


        if (
            !RavasonPlatformRegistry
        ) {

            return false;

        }


        return RavasonPlatformRegistry.hasModule(

            productId,

            moduleId

        );

    },


    requireProductModule(
        productId,
        moduleId
    ) {

        if (
            !RavasonProductAccessService
        ) {

            throw new Error(

                "ProductAccessService is not available."

            );

        }


        RavasonProductAccessService
            .requireRegisteredProduct(
                productId
            );


        const hasModule =
            this.productHasModule(

                productId,

                moduleId

            );


        if (
            !hasModule
        ) {

            throw new Error(

                "Product does not contain module: " +
                moduleId

            );

        }


        return true;

    },


    tenantHasModule(
        tenantId,
        productId,
        moduleId
    ) {

        this.requireProductModule(

            productId,

            moduleId

        );


        return RavasonProductAccessService
            .tenantHasProduct(

                tenantId,

                productId

            );

    },


    requireTenantModuleAccess(
        tenantId,
        productId,
        moduleId
    ) {

        this.requireProductModule(

            productId,

            moduleId

        );


        RavasonProductAccessService
            .requireTenantProductAccess(

                tenantId,

                productId

            );


        return true;

    },


    currentTenantHasModule(
        productId,
        moduleId
    ) {

        const tenant =
            RavasonTenantService
                .getCurrentTenant();


        if (
            !tenant
        ) {

            return false;

        }


        return this.tenantHasModule(

            tenant.id,

            productId,

            moduleId

        );

    },


    requireCurrentTenantModule(
        productId,
        moduleId
    ) {

        const tenant =
            RavasonTenantService
                .getCurrentTenant();


        if (
            !tenant
        ) {

            throw new Error(

                "No active tenant is selected."

            );

        }


        return this.requireTenantModuleAccess(

            tenant.id,

            productId,

            moduleId

        );

    }

};


window.RavasonModuleAccessService =
    RavasonModuleAccessService;
