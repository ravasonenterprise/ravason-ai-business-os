const RavasonSubscriptionResolverService = {

    resolve(tenantId) {

        const subscription =
            RavasonCustomerSubscriptionService.getByTenant(
                tenantId
            );

        if (!subscription) {

            return null;

        }

        const plan =
            RavasonSubscriptionPlanService.get(
                subscription.planId
            );

        const access =
            RavasonPlanEntitlementResolverService.resolve(
                tenantId
            );

        return {

            tenantId,

            subscription,

            plan,

            access,

            aiTier:
                RavasonAIUsageTierService.getTier(
                    tenantId
                )

        };

    },

    exists(tenantId) {

        return (
            this.resolve(
                tenantId
            ) !== null
        );

    }

};

window.RavasonSubscriptionResolverService =
    RavasonSubscriptionResolverService;
