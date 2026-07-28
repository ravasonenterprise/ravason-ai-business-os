const RavasonUserModel = {

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
                "user",

            tenantId:
                data.tenantId || null,

            username:
                data.username || "",

            email:
                data.email || "",

            roleId:
                data.roleId || null,

            firstName:
                data.firstName || "",

            lastName:
                data.lastName || "",

            avatar:
                data.avatar || null

        });

    }

};

window.RavasonUserModel =
    RavasonUserModel;
