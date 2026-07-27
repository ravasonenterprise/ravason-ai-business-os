const RavasonModuleInitializerService = {

    initialized:
        false,


    initialize() {

        if (
            this.initialized
        ) {

            return true;

        }


        if (
            !window.RavasonModuleRuntimeDefinitions
        ) {

            throw new Error(

                "ModuleRuntimeDefinitions is not available."

            );

        }


        RavasonModuleRuntimeDefinitions
            .registerDefaults();


        this.initialized =
            true;


        return true;

    },


    isInitialized() {

        return this.initialized;

    }

};


window.RavasonModuleInitializerService =
    RavasonModuleInitializerService;
