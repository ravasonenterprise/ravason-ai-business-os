const RavasonPlanEntitlementResolverService = {

    resolve(tenantId) {

        const subscription =
            RavasonCustomerSubscriptionService.getByTenant(
                tenantId
            );

        if (!subscription) {

            return {
                active: false,
                entitlements: []
            };

        }

        const plan =
            RavasonSubscriptionPlanService.get(
                subscription.planId
            );

        if (!plan) {

            return {
                active: false,
                entitlements: []
            };

        }

        return {

            active:
                subscription.status === "active",

            planId:
                plan.id,

            planName:
                plan.name,

            entitlements:
                plan.entitlements || []

        };

    },

    hasEntitlement(
        tenantId,
        entitlementKey
    ) {

        const access =
            this.resolve(
                tenantId
            );

        return (
            access.active &&
            access.entitlements.includes(
                entitlementKey
            )
        );

    }

};

window.RavasonPlanEntitlementResolverService =
    RavasonPlanEntitlementResolverService;
