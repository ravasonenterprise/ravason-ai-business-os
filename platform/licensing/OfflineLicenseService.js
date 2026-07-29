const RavasonOfflineLicenseService = {

    create(
        tenantId,
        subscriptionId = "",
        expiresAt = null
    ) {

        const license =
            RavasonLicenseModel.create({

                tenantId,

                subscriptionId,

                type:
                    RavasonLicenseConstants
                        .LICENSE_TYPES
                        .OFFLINE,

                status:
                    RavasonLicenseConstants
                        .LICENSE_STATUS
                        .PENDING,

                licenseKey:
                    RavasonLicenseKeyGenerator.generate(
                        RavasonLicenseConstants
                            .LICENSE_TYPES
                            .OFFLINE
                    ),

                expiresAt

            });

        RavasonLicenseStorageService.create(
            license
        );

        if (window.RavasonLicenseAuditService) {

            RavasonLicenseAuditService.log(
                "offline_license_created",
                license
            );

        }

        return license;

    },


    isOffline(
        license
    ) {

        return (

            license &&

            license.type ===
                RavasonLicenseConstants
                    .LICENSE_TYPES
                    .OFFLINE

        );

    },


    validate(
        license
    ) {

        if (
            !this.isOffline(
                license
            )
        ) {

            return {

                valid: false,

                message:
                    "Not an offline licence."

            };

        }

        return RavasonLicenseValidator.validate(
            license
        );

    },


    activate(
        licenseId,
        deviceId = null
    ) {

        return RavasonLicenseActivationService.activate(
            licenseId,
            deviceId
        );

    }

};

window.RavasonOfflineLicenseService =
    RavasonOfflineLicenseService;
