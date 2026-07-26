const RavasonModuleRuntimeService = {

    requireRuntimeDependencies() {

        if (
            !window.RavasonTenantService
        ) {

            throw new Error(

                "TenantService is not available."

            );

        }


        if (
            !window.RavasonProductAccessService
        ) {

            throw new Error(

                "ProductAccessService is not available."

            );

        }


        if (
            !window.RavasonModuleAccessService
        ) {

            throw new Error(

                "ModuleAccessService is not available."

            );

        }


        if (
            !window.RavasonModuleLifecycleService
        ) {

            throw new Error(

                "ModuleLifecycleService is not available."

            );

        }


        return true;

    },


    requireModuleRuntime(
        productId,
        moduleId
    ) {

        this.requireRuntimeDependencies();


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


        RavasonProductAccessService
            .requireTenantProductAccess(

                tenant.id,

                productId

            );


        RavasonModuleAccessService
            .requireProductModule(

                productId,

                moduleId

            );


        RavasonModuleLifecycleService
            .requireEnabled(

                moduleId

            );


        return true;

    },


    canRunModule(
        productId,
        moduleId
    ) {

        try {

            this.requireModuleRuntime(

                productId,

                moduleId

            );


            return true;

        }

        catch (
            error
        ) {

            return false;

        }

    },


    getRuntimeState(
        productId,
        moduleId
    ) {

        this.requireRuntimeDependencies();


        const tenant =
            RavasonTenantService
                .getCurrentTenant();


        const state = {

            tenantId:
                tenant
                    ? tenant.id
                    : null,

            productId:
                productId ||
                null,

            moduleId:
                moduleId ||
                null,

            tenantSelected:
                Boolean(
                    tenant
                ),

            productAccess:
                false,

            moduleAccess:
                false,

            lifecycleEnabled:
                false,

            canRun:
                false

        };


        if (
            !tenant
        ) {

            return state;

        }


        state.productAccess =
            RavasonProductAccessService
                .tenantHasProduct(

                    tenant.id,

                    productId

                );


        state.moduleAccess =
            RavasonModuleAccessService
                .productHasModule(

                    productId,

                    moduleId

                );


        state.lifecycleEnabled =
            RavasonModuleLifecycleService
                .isEnabled(

                    moduleId

                );


        state.canRun =
            state.tenantSelected &&
            state.productAccess &&
            state.moduleAccess &&
            state.lifecycleEnabled;


        return state;

    }

};


window.RavasonModuleRuntimeService =
    RavasonModuleRuntimeService;
