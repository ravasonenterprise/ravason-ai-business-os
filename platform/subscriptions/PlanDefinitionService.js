const RavasonPlanDefinitionService = {

    plans: {


        FREE: {

            id:
                "free",

            name:
                "Free",

            aiLevel:
                "zero_ai",

            ads:
                true,

            maxUsers:
                1,

            voice:
                false

        },


        STARTER: {

            id:
                "starter",

            name:
                "Starter",

            aiLevel:
                "medium_ai",

            ads:
                true,

            maxUsers:
                5,

            voice:
                false

        },


        PRO: {

            id:
                "pro",

            name:
                "Pro",

            aiLevel:
                "medium_ai",

            ads:
                false,

            maxUsers:
                25,

            voice:
                true

        },


        ENTERPRISE: {

            id:
                "enterprise",

            name:
                "Enterprise",

            aiLevel:
                "full_ai",

            ads:
                false,

            maxUsers:
                999999,

            voice:
                true

        }


    },


    getPlan(
        planId
    ) {

        return (

            Object.values(
                this.plans
            )
            .find(

                plan =>

                    plan.id === planId

            ) || null

        );

    },


    getAllPlans() {

        return Object.values(
            this.plans
        );

    },


    exists(
        planId
    ) {

        return (
            this.getPlan(
                planId
            ) !== null
        );

    }

};


window.RavasonPlanDefinitionService =
    RavasonPlanDefinitionService;
