const RavasonCustomerSubscriptionModel = {

    create(data = {}) {

        return {

            id:
                data.id ||
                crypto.randomUUID(),


            tenantId:
                data.tenantId ||
                null,


            planId:
                data.planId ||
                "free",


            status:
                data.status ||
                "active",


            startDate:
                data.startDate ||
                new Date()
                    .toISOString(),


            renewalDate:
                data.renewalDate ||
                null,


            autoRenew:
                data.autoRenew !== undefined
                    ?
                    data.autoRenew
                    :
                    true,


            createdAt:
                new Date()
                    .toISOString(),


            updatedAt:
                new Date()
                    .toISOString()

        };

    },


    validate(subscription) {

        return (

            subscription &&

            typeof subscription.id ===
                "string" &&

            typeof subscription.tenantId ===
                "string" &&

            typeof subscription.planId ===
                "string"

        );

    }

};


window.RavasonCustomerSubscriptionModel =
    RavasonCustomerSubscriptionModel;
