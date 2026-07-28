const RavasonEntitlementModel = {

    create(data = {}) {

        return {

            id:
                data.id || crypto.randomUUID(),

            tenantId:
                data.tenantId || null,

            planId:
                data.planId || null,

            module:
                data.module || "",

            enabled:
                data.enabled || false,

            aiLevel:
                data.aiLevel ||
                RavasonSubscriptionConstants
                    .AI_LEVELS
                    .ZERO,

            limits:
                data.limits || {},

            features:
                data.features || {},

            createdAt:
                new Date()
                    .toISOString(),

            updatedAt:
                new Date()
                    .toISOString()

        };

    },


    validate(entitlement) {

        return (

            entitlement &&

            typeof entitlement.id === "string" &&

            typeof entitlement.module === "string"

        );

    }

};


window.RavasonEntitlementModel =
    RavasonEntitlementModel;
