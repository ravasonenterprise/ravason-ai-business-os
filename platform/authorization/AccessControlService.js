const RavasonAccessControlService = {

    requestAccess(
        identity,
        role,
        permission
    ) {

        if (
            !identity ||
            !role ||
            !permission
        ) {

            return {

                allowed:
                    false,

                reason:
                    "Access request data missing.",

                timestamp:
                    new Date()
                        .toISOString()

            };

        }


        const authorization =
            RavasonAuthorizationService
                .checkPermission(
                    role,
                    permission
                );


        return {

            allowed:
                authorization.result ===
                RavasonAuthorizationConstants
                    .ACCESS_RESULT
                    .ALLOWED,

            identityId:
                identity.id,

            roleId:
                role.id,

            permissionId:
                permission.id,

            timestamp:
                new Date()
                    .toISOString()

        };

    }

};


window.RavasonAccessControlService =
    RavasonAccessControlService;
