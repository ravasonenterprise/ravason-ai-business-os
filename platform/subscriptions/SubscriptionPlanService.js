const RavasonSubscriptionPlanService = {

    plans: [],


    create(data = {}) {

        const plan =
            RavasonSubscriptionPlanModel.create(
                data
            );


        if (
            !RavasonSubscriptionPlanModel.validate(
                plan
            )
        ) {

            throw new Error(
                "Invalid subscription plan."
            );

        }


        this.plans.push(
            plan
        );


        return plan;

    },


    get(
        planId
    ) {

        return (

            this.plans.find(

                plan =>
                    plan.id === planId

            ) || null

        );

    },


    getAll() {

        return [
            ...this.plans
        ];

    },


    update(
        planId,
        updates = {}
    ) {

        const plan =
            this.get(
                planId
            );


        if (
            !plan
        ) {

            return null;

        }


        Object.assign(

            plan,

            updates,

            {

                updatedAt:
                    new Date()
                        .toISOString()

            }

        );


        return plan;

    },


    delete(
        planId
    ) {

        const index =
            this.plans.findIndex(

                plan =>
                    plan.id === planId

            );


        if (
            index === -1
        ) {

            return false;

        }


        this.plans.splice(
            index,
            1
        );


        return true;

    },


    exists(
        planId
    ) {

        return (
            this.get(
                planId
            ) !== null
        );

    }

};


window.RavasonSubscriptionPlanService =
    RavasonSubscriptionPlanService;
