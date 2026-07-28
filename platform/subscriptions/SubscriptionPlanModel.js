const RavasonSubscriptionPlanModel = {

    create(data = {}) {

        return {

            id:
                data.id || crypto.randomUUID(),

            name:
                data.name || "",

            planType:
                data.planType ||
                RavasonSubscriptionConstants
                    .PLANS
                    .FREE,

            aiLevel:
                data.aiLevel ||
                RavasonSubscriptionConstants
                    .AI_LEVELS
                    .ZERO,

            price:
                data.price || 0,

            currency:
                data.currency || "KES",

            billingInterval:
                data.billingInterval ||
                RavasonSubscriptionConstants
                    .BILLING_INTERVALS
                    .MONTHLY,

            modules:
                data.modules || [],

            features:
                data.features || [],

            status:
                data.status ||
                RavasonSubscriptionConstants
                    .STATUS
                    .ACTIVE,

            createdAt:
                new Date()
                    .toISOString(),

            updatedAt:
                new Date()
                    .toISOString()

        };

    },


    validate(plan) {

        return (

            plan &&

            typeof plan.id === "string" &&

            typeof plan.name === "string"

        );

    }

};


window.RavasonSubscriptionPlanModel =
    RavasonSubscriptionPlanModel;
