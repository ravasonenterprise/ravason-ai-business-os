const RavasonSubscriptionAccessGuardService = {

    check(
        tenantId,
        entitlementKey,
        options = {}
    ) {

        const tenantExists =
            RavasonTenantService.exists(
                tenantId
            );

        if (!tenantExists) {

            return {

                allowed: false,

                reason:
                    "Tenant not found."

            };

        }

        const access =
            RavasonPlanEntitlementResolverService.resolve(
                tenantId
            );

        if (!access.active) {

            return {

                allowed: false,

                reason:
                    "Subscription inactive."

            };

        }

        if (
            entitlementKey &&
            !RavasonPlanEntitlementResolverService.hasEntitlement(
                tenantId,
                entitlementKey
            )
        ) {

            return {

                allowed: false,

                reason:
                    "Entitlement not available."

            };

        }

        if (
            options.requiresAI === true &&
            !RavasonAIUsageTierService.hasAI(
                tenantId
            )
        ) {

            return {

                allowed: false,

                reason:
                    "AI access not available."

            };

        }

        if (
            options.requiresVoice === true &&
            !RavasonAIUsageTierService.hasVoiceAccess(
                tenantId
            )
        ) {

            return {

                allowed: false,

                reason:
                    "Voice access not available."

            };

        }

        return {

            allowed: true,

            reason:
                "Access granted.",

            timestamp:
                new Date()
                    .toISOString()

        };

    }

};

window.RavasonSubscriptionAccessGuardService =
    RavasonSubscriptionAccessGuardService;
