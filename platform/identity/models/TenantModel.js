const RavasonTenantModel = {

    create(data = {}) {

        if (
            !window.RavasonIdentityModel
        ) {

            throw new Error(
                "IdentityModel is not available."
            );

        }

        return RavasonIdentityModel.create({

            ...data,

            identityType:
                "tenant",

            businessName:
                data.businessName || "",

            ownerUserId:
                data.ownerUserId || null,

            subscriptionId:
                data.subscriptionId || null

        });

    }

};

window.RavasonTenantModel =
    RavasonTenantModel;
