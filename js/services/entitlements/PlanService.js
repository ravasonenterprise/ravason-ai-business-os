const RavasonPlanService = {

    PLANS: {

        FREE: "free",

        STARTER: "starter",

        PRO: "pro",

        ENTERPRISE: "enterprise"

    },


    getDefaultPlan() {

        return this.PLANS.FREE;

    },


    isValidPlan(plan) {

        return Object.values(
            this.PLANS
        ).includes(plan);

    },


    getPlanRank(plan) {

        const ranks = {

            free: 0,

            starter: 1,

            pro: 2,

            enterprise: 3

        };

        return ranks[plan] ?? 0;

    },


    isAtLeast(
        currentPlan,
        requiredPlan
    ) {

        return this.getPlanRank(
            currentPlan
        ) >= this.getPlanRank(
            requiredPlan
        );

    }

};


window.RavasonPlanService =
    RavasonPlanService;
