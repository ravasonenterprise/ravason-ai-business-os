const RavasonAIEntitlementService = {

    AI_LEVELS: {

        ZERO:
            "zero_ai",

        MEDIUM:
            "medium_ai",

        FULL:
            "full_ai"

    },


    entitlements: [],


    assign(
        tenantId,
        level
    ) {

        if (
            !Object.values(
                this.AI_LEVELS
            ).includes(level)
        ) {

            throw new Error(
                "Invalid AI entitlement level."
            );

        }


        const entitlement = {

            id:
                crypto.randomUUID(),

            tenantId:

                tenantId,

            level:

                level,

            enabled:

                level !==
                this.AI_LEVELS.ZERO,

            createdAt:

                new Date()
                    .toISOString()

        };


        this.entitlements.push(
            entitlement
        );


        return entitlement;

    },


    get(
        tenantId
    ) {

        return (

            this.entitlements.find(

                item =>

                    item.tenantId ===
                    tenantId

            ) || null

        );

    },


    canUseAI(
        tenantId
    ) {

        const entitlement =

            this.get(
                tenantId
            );


        if (
            !entitlement
        ) {

            return false;

        }


        return entitlement.enabled;

    },


    getLevel(
        tenantId
    ) {

        const entitlement =

            this.get(
                tenantId
            );


        return (

            entitlement

                ? entitlement.level

                : this.AI_LEVELS.ZERO

        );

    }

};


window.RavasonAIEntitlementService =
    RavasonAIEntitlementService;
