const RavasonModuleRuntimeDefinitions = {

    registerDefaults() {

        if (
            !window.RavasonModuleLoaderService
        ) {

            throw new Error(

                "ModuleLoaderService is not available."

            );

        }


        RavasonModuleLoaderService
            .registerRuntimeDefinition(

                RavasonPlatformRegistry
                    .MODULES
                    .FINANCE,

                {

                    id:
                        RavasonPlatformRegistry
                            .MODULES
                            .FINANCE,

                    name:
                        "Finance",

                    load() {

                        return {

                            id:
                                RavasonPlatformRegistry
                                    .MODULES
                                    .FINANCE,

                            name:
                                "Finance",

                            initialized:
                                false

                        };

                    }

                }

            );


        return true;

    }

};


window.RavasonModuleRuntimeDefinitions =
    RavasonModuleRuntimeDefinitions;
