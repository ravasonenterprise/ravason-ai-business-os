const RavasonAIConsentService = {

    STORAGE_KEY:
        "ravason_ai_enabled",


    isEnabled() {

        return (
            RavasonEntitlementService.isAIEnabled()
        );

    },


    enable() {

        if (
            !RavasonEntitlementService.canUse(
                "ai"
            )
        ) {

            return {

                success: false,

                reason:
                    "AI is not available on the current plan."

            };

        }


        const saved =
            RavasonEntitlementService.setAIEnabled(
                true
            );


        return {

            success: saved,

            reason:
                saved
                    ? "AI enabled successfully."
                    : "AI could not be enabled."

        };

    },


    disable() {

        const saved =
            RavasonEntitlementService.setAIEnabled(
                false
            );


        return {

            success: saved,

            reason:
                saved
                    ? "AI disabled successfully."
                    : "AI could not be disabled."

        };

    },


    getStatus() {

        const plan =
            RavasonEntitlementService.getPlan();


        return {

            plan: plan,

            aiAvailable:
                RavasonEntitlementService.canUse(
                    "ai"
                ) === true,

            enabled:
                this.isEnabled()

        };

    }

};


window.RavasonAIConsentService =
    RavasonAIConsentService;
