const RavasonAIUsageTierService = {

    getTier(tenantId) {

        const access =
            RavasonPlanEntitlementResolverService.resolve(
                tenantId
            );

        if (!access.active) {

            return "zero_ai";

        }

        if (
            access.entitlements.includes(
                "full_ai"
            )
        ) {

            return "full_ai";

        }

        if (
            access.entitlements.includes(
                "medium_ai"
            )
        ) {

            return "medium_ai";

        }

        return "zero_ai";

    },


    hasAI(tenantId) {

        return (
            this.getTier(
                tenantId
            ) !== "zero_ai"
        );

    },


    hasVoiceAccess(tenantId) {

        return (
            this.getTier(
                tenantId
            ) === "full_ai"
        );

    },


    canUseModuleAI(
        tenantId,
        moduleName
    ) {

        const tier =
            this.getTier(
                tenantId
            );

        if (
            tier === "full_ai"
        ) {

            return true;

        }

        if (
            tier === "medium_ai"
        ) {

            return true;

        }

        return false;

    }

};

window.RavasonAIUsageTierService =
    RavasonAIUsageTierService;
