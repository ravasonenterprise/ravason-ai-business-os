const RavasonProductAccessService = {

    isProductRegistered(
        productId
    ) {

        if (
            !productId
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
            typeof registry.getProduct !==
                "function"
        ) {

            return false;

        }


        return Boolean(

            registry.getProduct(
                productId
            )

        );

    },


    requireRegisteredProduct(
        productId
    ) {

        if (
            !this.isProductRegistered(
                productId
            )
        ) {

            throw new Error(

                "Product is not registered: " +
                productId

            );

        }


        return true;

    },


    tenantHasProduct(
        tenantId,
        productId
    ) {

        this.requireRegisteredProduct(
            productId
        );


        return RavasonTenantService
            .tenantHasProduct(
                tenantId,
                productId
            );

    },


    requireTenantProductAccess(
        tenantId,
        productId
    ) {

        this.requireRegisteredProduct(
            productId
        );


        const hasAccess =
            this.tenantHasProduct(
                tenantId,
                productId
            );


        if (
            !hasAccess
        ) {

            throw new Error(

                "Tenant does not have access to product: " +
                productId

            );

        }


        return true;

    },


    attachProductToTenant(
        tenantId,
        productId
    ) {

        this.requireRegisteredProduct(
            productId
        );


        return RavasonTenantService
            .attachProduct(
                tenantId,
                productId
            );

    },


    currentTenantHasProduct(
        productId
    ) {

        const tenant =
            RavasonTenantService
                .getCurrentTenant();


        if (
            !tenant
        ) {

            return false;

        }


        return this.tenantHasProduct(
            tenant.id,
            productId
        );

    },


    requireCurrentTenantProduct(
        productId
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


        return this.requireTenantProductAccess(

            tenant.id,

            productId

        );

    }

};


window.RavasonProductAccessService =
    RavasonProductAccessService;
