const RavasonModuleRegistry = {

    STORAGE_KEY:
        "ravason_platform_modules",


    getDefaultModules() {

        return [

            {
                id:
                    RavasonPlatformRegistry.MODULES.FINANCE,

                name:
                    "Finance",

                description:
                    "Financial management and business finance operations.",

                status:
                    "active",

                products: [

                    RavasonPlatformRegistry.PRODUCTS.BUSINESS_OS

                ]

            },


            {
                id:
                    RavasonPlatformRegistry.MODULES.DOCUMENTS,

                name:
                    "Documents",

                description:
                    "Business document management and organization.",

                status:
                    "active",

                products: [

                    RavasonPlatformRegistry.PRODUCTS.BUSINESS_OS

                ]

            },


            {
                id:
                    RavasonPlatformRegistry.MODULES.AUTOMATION,

                name:
                    "Automation",

                description:
                    "Business workflow and process automation.",

                status:
                    "active",

                products: [

                    RavasonPlatformRegistry.PRODUCTS.BUSINESS_OS

                ]

            },


            {
                id:
                    RavasonPlatformRegistry.MODULES.MEDIA,

                name:
                    "Media",

                description:
                    "Business media and file management.",

                status:
                    "active",

                products: [

                    RavasonPlatformRegistry.PRODUCTS.BUSINESS_OS

                ]

            },


            {
                id:
                    RavasonPlatformRegistry.MODULES.MARKETPLACE,

                name:
                    "Marketplace",

                description:
                    "Business marketplace and commerce capabilities.",

                status:
                    "active",

                products: [

                    RavasonPlatformRegistry.PRODUCTS.BUSINESS_OS

                ]

            },


            {
                id:
                    RavasonPlatformRegistry.MODULES.COMMUNICATION,

                name:
                    "Communication",

                description:
                    "Business communication and collaboration tools.",

                status:
                    "active",

                products: [

                    RavasonPlatformRegistry.PRODUCTS.BUSINESS_OS

                ]

            },


            {
                id:
                    RavasonPlatformRegistry.MODULES.REPORTING,

                name:
                    "Reporting",

                description:
                    "Business reporting and performance insights.",

                status:
                    "active",

                products: [

                    RavasonPlatformRegistry.PRODUCTS.BUSINESS_OS

                ]

            },


            {
                id:
                    RavasonPlatformRegistry.MODULES.AI,

                name:
                    "AI",

                description:
                    "Optional artificial intelligence capabilities.",

                status:
                    "active",

                products: [

                    RavasonPlatformRegistry.PRODUCTS.BUSINESS_OS

                ]

            },


            {
                id:
                    RavasonPlatformRegistry.MODULES.VOICE,

                name:
                    "Voice",

                description:
                    "Voice input and voice-enabled business operations.",

                status:
                    "active",

                products: [

                    RavasonPlatformRegistry.PRODUCTS.BUSINESS_OS

                ]

            },


            {
                id:
                    RavasonPlatformRegistry.MODULES.CCTV,

                name:
                    "CCTV",

                description:
                    "Security camera and monitoring capabilities.",

                status:
                    "active",

                products: [

                    RavasonPlatformRegistry.PRODUCTS.BUSINESS_OS

                ]

            }

        ];

    },


    getModules() {

        const storedModules =
            RavasonStorageService.get(
                this.STORAGE_KEY
            );


        if (
            Array.isArray(
                storedModules
            )
        ) {

            return storedModules;

        }


        const defaultModules =
            this.getDefaultModules();


        RavasonStorageService.set(

            this.STORAGE_KEY,

            defaultModules

        );


        return defaultModules;

    },


    saveModules(
        modules
    ) {

        if (
            !Array.isArray(
                modules
            )
        ) {

            return false;

        }


        return RavasonStorageService.set(

            this.STORAGE_KEY,

            modules

        );

    },


    getModule(
        moduleId
    ) {

        if (
            !moduleId
        ) {

            return null;

        }


        return this
            .getModules()
            .find(

                module =>
                    module.id ===
                    moduleId

            ) || null;

    },


    isRegistered(
        moduleId
    ) {

        return Boolean(

            this.getModule(
                moduleId
            )

        );

    },


    getModulesForProduct(
        productId
    ) {

        if (
            !productId
        ) {

            return [];

        }


        return this
            .getModules()
            .filter(

                module =>
                    Array.isArray(
                        module.products
                    ) &&
                    module.products.includes(
                        productId
                    )

            );

    },


    registerModule(
        moduleData = {}
    ) {

        if (
            !moduleData.id
        ) {

            throw new Error(

                "Module ID is required."

            );

        }


        if (
            this.isRegistered(
                moduleData.id
            )
        ) {

            throw new Error(

                "Module is already registered: " +
                moduleData.id

            );

        }


        const modules =
            this.getModules();


        const module = {

            id:
                moduleData.id,

            name:
                moduleData.name ||
                moduleData.id,

            description:
                moduleData.description ||
                "",

            status:
                moduleData.status ||
                "active",

            products:
                Array.isArray(
                    moduleData.products
                )
                    ? [
                        ...moduleData.products
                    ]
                    : [],

            registeredAt:
                new Date()
                    .toISOString()

        };


        modules.push(
            module
        );


        const saved =
            this.saveModules(
                modules
            );


        return saved
            ? module
            : null;

    },


    updateModule(
        moduleId,
        updates = {}
    ) {

        const modules =
            this.getModules();


        const index =
            modules.findIndex(

                module =>
                    module.id ===
                    moduleId

            );


        if (
            index ===
            -1
        ) {

            return null;

        }


        const existing =
            modules[index];


        const updatedModule = {

            ...existing,

            ...updates,

            id:
                existing.id,

            updatedAt:
                new Date()
                    .toISOString()

        };


        modules[index] =
            updatedModule;


        const saved =
            this.saveModules(
                modules
            );


        return saved
            ? updatedModule
            : null;

    },


    unregisterModule(
        moduleId
    ) {

        const modules =
            this.getModules();


        const filtered =
            modules.filter(

                module =>
                    module.id !==
                    moduleId

            );


        if (
            filtered.length ===
            modules.length
        ) {

            return false;

        }


        return this.saveModules(
            filtered
        );

    }

};


window.RavasonModuleRegistry =
    RavasonModuleRegistry;
