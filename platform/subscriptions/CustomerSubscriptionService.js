const RavasonCustomerSubscriptionService = {


    subscriptions: [],


    create(data = {}) {

        const subscription =
            RavasonCustomerSubscriptionModel.create(
                data
            );


        this.subscriptions.push(
            subscription
        );


        return subscription;

    },


    get(subscriptionId) {

        return (

            this.subscriptions.find(

                subscription =>

                    subscription.id ===
                    subscriptionId

            ) || null

        );

    },


    getByTenant(tenantId) {

        return (

            this.subscriptions.find(

                subscription =>

                    subscription.tenantId ===
                    tenantId

            ) || null

        );

    },


    update(
        subscriptionId,
        updates = {}
    ) {

        const subscription =
            this.get(
                subscriptionId
            );


        if (
            !subscription
        ) {

            return null;

        }


        Object.assign(

            subscription,

            updates,

            {

                updatedAt:

                    new Date()
                        .toISOString()

            }

        );


        return subscription;

    },


    changePlan(
        tenantId,
        planId
    ) {

        const subscription =
            this.getByTenant(
                tenantId
            );


        if (
            !subscription
        ) {

            return null;

        }


        subscription.planId =
            planId;


        subscription.updatedAt =
            new Date()
                .toISOString();


        return subscription;

    },


    cancel(
        tenantId
    ) {

        const subscription =
            this.getByTenant(
                tenantId
            );


        if (
            !subscription
        ) {

            return false;

        }


        subscription.status =
            "cancelled";


        subscription.updatedAt =
            new Date()
                .toISOString();


        return true;

    },


    isActive(
        tenantId
    ) {

        const subscription =
            this.getByTenant(
                tenantId
            );


        return (

            subscription &&

            subscription.status ===
                "active"

        );

    }


};


window.RavasonCustomerSubscriptionService =
    RavasonCustomerSubscriptionService;
