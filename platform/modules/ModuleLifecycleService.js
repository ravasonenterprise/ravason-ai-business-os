const RavasonModuleLifecycleService = {

    STATUSES: {

        REGISTERED:
            "registered",

        AVAILABLE:
            "available",

        ENABLED:
            "enabled",

        DISABLED:
            "disabled",

        DEPRECATED:
            "deprecated"

    },


    getModule(
        moduleId
    ) {

        if (
            !window.RavasonModuleRegistry
        ) {

            throw new Error(

                "ModuleRegistry is not available."

            );

        }


        return RavasonModuleRegistry
            .getModule(
                moduleId
            );

    },


    requireModule(
        moduleId
    ) {

        const module =
            this.getModule(
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


        return module;

    },


    getStatus(
        moduleId
    ) {

        const module =
            this.requireModule(
                moduleId
            );


        return module.status;

    },


    isEnabled(
        moduleId
    ) {

        return this.getStatus(
            moduleId
        ) ===
            this.STATUSES.ENABLED;

    },


    isAvailable(
        moduleId
    ) {

        const status =
            this.getStatus(
                moduleId
            );


        return (

            status ===
                this.STATUSES.AVAILABLE

        ) ||

        (

            status ===
                this.STATUSES.ENABLED

        );

    },


    requireEnabled(
        moduleId
    ) {

        const module =
            this.requireModule(
                moduleId
            );


        if (
            module.status !==
                this.STATUSES.ENABLED
        ) {

            throw new Error(

                "Module is not enabled: " +
                moduleId

            );

        }


        return true;

    },


    setStatus(
        moduleId,
        status
    ) {

        const validStatuses =
            Object.values(
                this.STATUSES
            );


        if (
            !validStatuses.includes(
                status
            )
        ) {

            throw new Error(

                "Invalid module status: " +
                status

            );

        }


        const module =
            this.requireModule(
                moduleId
            );


        return RavasonModuleRegistry
            .updateModule(

                moduleId,

                {

                    status:
                        status

                }

            );

    },


    makeAvailable(
        moduleId
    ) {

        const module =
            this.requireModule(
                moduleId
            );


        if (
            module.status ===
                this.STATUSES.DEPRECATED
        ) {

            throw new Error(

                "Deprecated modules cannot be made available: " +
                moduleId

            );

        }


        return this.setStatus(

            moduleId,

            this.STATUSES.AVAILABLE

        );

    },


    enableModule(
        moduleId
    ) {

        const module =
            this.requireModule(
                moduleId
            );


        if (
            module.status ===
                this.STATUSES.DEPRECATED
        ) {

            throw new Error(

                "Deprecated modules cannot be enabled: " +
                moduleId

            );

        }


        return this.setStatus(

            moduleId,

            this.STATUSES.ENABLED

        );

    },


    disableModule(
        moduleId
    ) {

        const module =
            this.requireModule(
                moduleId
            );


        if (
            module.status ===
                this.STATUSES.DEPRECATED
        ) {

            throw new Error(

                "Deprecated modules cannot be disabled: " +
                moduleId

            );

        }


        return this.setStatus(

            moduleId,

            this.STATUSES.DISABLED

        );

    },


    deprecateModule(
        moduleId
    ) {

        this.requireModule(
            moduleId
        );


        return this.setStatus(

            moduleId,

            this.STATUSES.DEPRECATED

        );

    },


    isDeprecated(
        moduleId
    ) {

        return this.getStatus(
            moduleId
        ) ===
            this.STATUSES.DEPRECATED;

    }

};


window.RavasonModuleLifecycleService =
    RavasonModuleLifecycleService;
