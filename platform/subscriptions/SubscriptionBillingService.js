const RavasonSubscriptionBillingService = {

    subscriptions: [],


    create(subscription) {

        this.subscriptions.push({

            id:
                crypto.randomUUID(),

            tenantId:
                subscription.tenantId,

            planId:
                subscription.planId,

            status:
                subscription.status || "active",

            provider:
                subscription.provider || "manual",

            createdAt:
                new Date()
                    .toISOString(),

            updatedAt:
                new Date()
                    .toISOString()

        });


        return this.subscriptions[
            this.subscriptions.length - 1
        ];

    },


    getByTenant(
        tenantId
    ) {

        return (

            this.subscriptions.find(

                subscription =>

                    subscription.tenantId ===
                    tenantId

            ) || null

        );

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


window.RavasonSubscriptionBillingService =
    RavasonSubscriptionBillingService;
