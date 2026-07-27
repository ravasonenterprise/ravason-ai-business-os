const RavasonModuleLoaderService = {

    RUNTIME_DEFINITIONS: {},


    registerRuntimeDefinition(
        moduleId,
        definition
    ) {

        if (
            !moduleId
        ) {

            throw new Error(

                "Module ID is required."

            );

        }


        if (
            !definition ||
            typeof definition !==
                "object"
        ) {

            throw new Error(

                "Module runtime definition is required."

            );

        }


        this.RUNTIME_DEFINITIONS[
            moduleId
        ] =
            definition;


        return true;

    },


    getRuntimeDefinition(
        moduleId
    ) {

        if (
            !moduleId
        ) {

            return null;

        }


        return this.RUNTIME_DEFINITIONS[
            moduleId
        ] ||
        null;

    },


    requireRuntimeDefinition(
        moduleId
    ) {

        const definition =
            this.getRuntimeDefinition(
                moduleId
            );


        if (
            !definition
        ) {

            throw new Error(

                "No runtime definition registered for module: " +
                moduleId

            );

        }


        return definition;

    },


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
            .requireModuleRuntime(

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
                "active"
        ) {

            throw new Error(

                "Module is not active: " +
                moduleId

            );

        }


        const definition =
            this.requireRuntimeDefinition(

                moduleId

            );


        let loadedModule;


        if (
            typeof definition.load ===
                "function"
        ) {

            loadedModule =
                definition.load();

        }

        else {

            loadedModule =
                definition;

        }


        if (
            !loadedModule
        ) {

            throw new Error(

                "Module failed to load: " +
                moduleId

            );

        }


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

        return this.loadModule(

            productId,

            moduleId

        );

    },


    isModuleLoaded(
        productId,
        moduleId
    ) {

        try {

            return Boolean(

                this.loadModule(

                    productId,

                    moduleId

                )

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
