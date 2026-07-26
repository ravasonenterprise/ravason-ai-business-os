const RavasonModuleLoaderService = {

    loadModule(
        productId,
        moduleId
    ) {

        if (
            !window.RavasonModuleRuntimeService
        ) {

            throw new Error(

                "ModuleRuntimeService is not available."

            );

        }


        RavasonModuleRuntimeService
            .requireRuntimeAccess(

                productId,

                moduleId

            );


        const module =
            RavasonModuleRegistry
                .getModule(
                    moduleId
                );


        if (
            !module
        ) {

            throw new Error(

                "Module is not registered: " +
                moduleId

            );

        }


        if (
            module.status !==
                RavasonModuleRegistry
                    .STATUSES
                    .ACTIVE
        ) {

            throw new Error(

                "Module is not active: " +
                moduleId

            );

        }


        if (
            typeof module.loader !==
                "function"
        ) {

            throw new Error(

                "Module does not provide a loader: " +
                moduleId

            );

        }


        const loadedModule =
            module.loader();


        return {

            productId:
                productId,

            moduleId:
                moduleId,

            module:
                loadedModule,

            loadedAt:
                new Date()
                    .toISOString()

        };

    },


    requireModule(
        productId,
        moduleId
    ) {

        const loaded =
            this.loadModule(

                productId,

                moduleId

            );


        if (
            !loaded ||
            !loaded.module
        ) {

            throw new Error(

                "Module failed to load: " +
                moduleId

            );

        }


        return loaded;

    },


    isModuleLoaded(
        productId,
        moduleId
    ) {

        try {

            const loaded =
                this.loadModule(

                    productId,

                    moduleId

                );


            return Boolean(

                loaded &&
                loaded.module

            );

        }

        catch (
            error
        ) {

            return false;

        }

    }

};


window.RavasonModuleLoaderService =
    RavasonModuleLoaderService;
