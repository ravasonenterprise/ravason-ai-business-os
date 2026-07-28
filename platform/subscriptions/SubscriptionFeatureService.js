const RavasonSubscriptionFeatureService = {

    features: {


        CRM: {

            id:
                "crm",

            name:
                "CRM",

            plans:
                [
                    "starter",
                    "pro",
                    "enterprise"
                ]

        },


        FINANCE: {

            id:
                "finance",

            name:
                "Finance Management",

            plans:
                [
                    "starter",
                    "pro",
                    "enterprise"
                ]

        },


        INVENTORY: {

            id:
                "inventory",

            name:
                "Stock & Inventory",

            plans:
                [
                    "pro",
                    "enterprise"
                ]

        },


        AUTOMATION: {

            id:
                "automation",

            name:
                "Business Automation",

            plans:
                [
                    "pro",
                    "enterprise"
                ]

        },


        AI_ASSISTANT: {

            id:
                "ai_assistant",

            name:
                "AI Business Assistant",

            plans:
                [
                    "starter",
                    "pro",
                    "enterprise"
                ]

        },


        VOICE: {

            id:
                "voice",

            name:
                "Voice Commands",

            plans:
                [
                    "pro",
                    "enterprise"
                ]

        }


    },


    getFeature(
        featureId
    ) {

        return (

            Object.values(
                this.features
            )
            .find(

                feature =>

                    feature.id === featureId

            ) || null

        );

    },


    canUse(
        planId,
        featureId
    ) {

        const feature =
            this.getFeature(
                featureId
            );


        if (
            !feature
        ) {

            return false;

        }


        return feature.plans.includes(
            planId
        );

    },


    getFeaturesForPlan(
        planId
    ) {

        return (

            Object.values(
                this.features
            )
            .filter(

                feature =>

                    feature.plans.includes(
                        planId
                    )

            )

        );

    }

};


window.RavasonSubscriptionFeatureService =
    RavasonSubscriptionFeatureService;
