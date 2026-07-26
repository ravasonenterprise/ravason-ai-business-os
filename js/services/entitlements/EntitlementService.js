const RavasonEntitlementService = {

    getPlan() {

        const savedPlan =
            RavasonStorageService.get(
                "ravason_subscription_plan"
            );

        if (
            savedPlan &&
            RavasonPlanService.isValidPlan(
                savedPlan
            )
        ) {

            return savedPlan;

        }

        return RavasonPlanService.getDefaultPlan();

    },


    setPlan(plan) {

        if (
            !RavasonPlanService.isValidPlan(
                plan
            )
        ) {

            return false;

        }

        return RavasonStorageService.set(
            "ravason_subscription_plan",
            plan
        );

    },


    canUse(feature) {

        const plan =
            this.getPlan();


        const permissions = {

            free: {

                ai: false,

                voiceInput: false,

                automation: "limited",

                documentTransfer: true,

                mediaTransfer: false,

                cctv: false,

                cloudStorage: "limited"

            },


            starter: {

                ai: true,

                voiceInput: true,

                automation: "advanced",

                documentTransfer: true,

                mediaTransfer: true,

                cctv: "limited",

                cloudStorage: "expanded"

            },


            pro: {

                ai: true,

                voiceInput: true,

                automation: "advanced",

                documentTransfer: true,

                mediaTransfer: true,

                cctv: "advanced",

                cloudStorage: "large"

            },


            enterprise: {

                ai: true,

                voiceInput: true,

                automation: "enterprise",

                documentTransfer: true,

                mediaTransfer: true,

                cctv: "enterprise",

                cloudStorage: "enterprise"

            }

        };


        return permissions[plan]?.[feature];

    },


    isAIEnabled() {

        const aiEnabled =
            RavasonStorageService.get(
                "ravason_ai_enabled"
            );

        return (
            aiEnabled === true &&
            this.canUse("ai") === true
        );

    },


    setAIEnabled(enabled) {

        if (
            enabled === true &&
            !this.canUse("ai")
        ) {

            return false;

        }

        return RavasonStorageService.set(
            "ravason_ai_enabled",
            Boolean(enabled)
        );

    }

};


window.RavasonEntitlementService =
    RavasonEntitlementService;
