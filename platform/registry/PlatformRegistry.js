const RavasonPlatformRegistry = {

    STORAGE_KEY:
        "ravason_platform_registry",

    PRODUCTS: {

        BUSINESS_OS:
            "business-os",

        SCHOOL_OS:
            "school-os",

        HOTEL_OS:
            "hotel-os",

        POULTRY_OS:
            "poultry-os"

    },

    MODULES: {

        FINANCE:
            "finance",

        DOCUMENTS:
            "documents",

        AUTOMATION:
            "automation",

        MEDIA:
            "media",

        MARKETPLACE:
            "marketplace",

        COMMUNICATION:
            "communication",

        REPORTING:
            "reporting",

        AI:
            "ai",

        VOICE:
            "voice",

        CCTV:
            "cctv"

    },


    getDefaultRegistry() {

        return {

            products: [

                {
                    id:
                        this.PRODUCTS.BUSINESS_OS,

                    name:
                        "Business OS",

                    status:
                        "active",

                    modules: [

                        this.MODULES.FINANCE,

                        this.MODULES.DOCUMENTS,

                        this.MODULES.AUTOMATION,

                        this.MODULES.MEDIA,

                        this.MODULES.MARKETPLACE,

                        this.MODULES.COMMUNICATION,

                        this.MODULES.REPORTING,

                        this.MODULES.AI,

                        this.MODULES.VOICE,

                        this.MODULES.CCTV

                    ]

                },

                {
                    id:
                        this.PRODUCTS.SCHOOL_OS,

                    name:
                        "School OS",

                    status:
                        "planned",

                    modules: [

                        this.MODULES.FINANCE,

                        this.MODULES.DOCUMENTS,

                        this.MODULES.AUTOMATION,

                        this.MODULES.MEDIA,

                        this.MODULES.COMMUNICATION,

                        this.MODULES.REPORTING,

                        this.MODULES.AI,

                        this.MODULES.VOICE,

                        this.MODULES.CCTV

                    ]

                },

                {
                    id:
                        this.PRODUCTS.HOTEL_OS,

                    name:
                        "Hotel OS",

                    status:
                        "planned",

                    modules: [

                        this.MODULES.FINANCE,

                        this.MODULES.DOCUMENTS,

                        this.MODULES.AUTOMATION,

                        this.MODULES.MEDIA,

                        this.MODULES.MARKETPLACE,

                        this.MODULES.COMMUNICATION,

                        this.MODULES.REPORTING,

                        this.MODULES.AI,

                        this.MODULES.VOICE,

                        this.MODULES.CCTV

                    ]

                },

                {
                    id:
                        this.PRODUCTS.POULTRY_OS,

                    name:
                        "Poultry OS",

                    status:
                        "planned",

                    modules: [

                        this.MODULES.FINANCE,

                        this.MODULES.DOCUMENTS,

                        this.MODULES.AUTOMATION,

                        this.MODULES.MEDIA,

                        this.MODULES.MARKETPLACE,

                        this.MODULES.COMMUNICATION,

                        this.MODULES.REPORTING,

                        this.MODULES.AI,

                        this.MODULES.VOICE,

                        this.MODULES.CCTV

                    ]

                }

            ]

        };

    },


    getRegistry() {

        const storedRegistry =
            RavasonStorageService.get(
                this.STORAGE_KEY
            );


        if (
            storedRegistry &&
            Array.isArray(
                storedRegistry.products
            )
        ) {

            return storedRegistry;

        }


        const defaultRegistry =
            this.getDefaultRegistry();


        RavasonStorageService.set(

            this.STORAGE_KEY,

            defaultRegistry

        );


        return defaultRegistry;

    },


    getProducts() {

        return this
            .getRegistry()
            .products;

    },


    getProduct(productId) {

        return this
            .getProducts()
            .find(

                product =>
                    product.id ===
                    productId

            ) || null;

    },


    getProductModules(productId) {

        const product =
            this.getProduct(
                productId
            );


        if (
            !product
        ) {

            return [];

        }


        return [
            ...product.modules
        ];

    },


    hasModule(
        productId,
        moduleId
    ) {

        return this
            .getProductModules(
                productId
            )
            .includes(
                moduleId
            );

    }

};


window.RavasonPlatformRegistry =
    RavasonPlatformRegistry;
