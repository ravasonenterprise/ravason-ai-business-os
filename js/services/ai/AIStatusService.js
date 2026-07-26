const RavasonAIStatusService = {

    getStatus() {

        const plan =
            RavasonEntitlementService.getPlan();

        const aiAvailable =
            RavasonEntitlementService.canUse(
                "ai"
            ) === true;

        const aiEnabled =
            RavasonAIConsentService.isEnabled();


        if (!aiAvailable) {

            return {

                plan: plan,

                available: false,

                enabled: false,

                state: "unavailable",

                message:
                    "AI is not available on your current plan."

            };

        }


        if (!aiEnabled) {

            return {

                plan: plan,

                available: true,

                enabled: false,

                state: "disabled",

                message:
                    "AI is available but currently disabled."

            };

        }


        return {

            plan: plan,

            available: true,

            enabled: true,

            state: "enabled",

            message:
                "AI is enabled and ready to use."

        };

    },


    canUseAI() {

        const status =
            this.getStatus();

        return (
            status.available === true &&
            status.enabled === true
        );

    }

};


window.RavasonAIStatusService =
    RavasonAIStatusService;
