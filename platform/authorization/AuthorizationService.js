const RavasonAuthorizationService = {

    checkPermission(
        role,
        permission
    ) {

        if (
            !role ||
            !permission
        ) {

            return {

                result:
                    RavasonAuthorizationConstants
                        .ACCESS_RESULT
                        .DENIED,

                reason:
                    "Role or permission missing."

            };

        }


        const allowed =
            role.permissions.includes(
                permission.id
            );


        return {

            result:

                allowed

                    ? RavasonAuthorizationConstants
                        .ACCESS_RESULT
                        .ALLOWED

                    : RavasonAuthorizationConstants
                        .ACCESS_RESULT
                        .DENIED,


            permissionId:
                permission.id,

            roleId:
                role.id,

            timestamp:
                new Date()
                    .toISOString()

        };

    },


    canAccess(
        role,
        permission
    ) {

        return (

            this.checkPermission(
                role,
                permission
            ).result ===

            RavasonAuthorizationConstants
                .ACCESS_RESULT
                .ALLOWED

        );

    }

};


window.RavasonAuthorizationService =
    RavasonAuthorizationService;
