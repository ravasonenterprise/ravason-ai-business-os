const RavasonEnterpriseLicenseService = {

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
                        .ENTERPRISE,

                status:
                    RavasonLicenseConstants
                        .LICENSE_STATUS
                        .PENDING,

                licenseKey:
                    RavasonLicenseKeyGenerator.generate(
                        RavasonLicenseConstants
                            .LICENSE_TYPES
                            .ENTERPRISE
                    ),

                expiresAt

            });

        RavasonLicenseStorageService.create(
            license
        );

        if (
            window.RavasonLicenseAuditService
        ) {

            RavasonLicenseAuditService.log(
                "enterprise_license_created",
                license
            );

        }

        return license;

    },


    isEnterprise(
        license
    ) {

        return (

            license &&

            license.type ===

            RavasonLicenseConstants
                .LICENSE_TYPES
                .ENTERPRISE

        );

    },


    validate(
        license
    ) {

        if (
            !this.isEnterprise(
                license
            )
        ) {

            return {

                valid: false,

                message:
                    "Not an enterprise licence."

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

    },


    hasUnlimitedDevices() {

        return true;

    },


    getMaximumDevices() {

        return Number.MAX_SAFE_INTEGER;

    }

};

window.RavasonEnterpriseLicenseService =
    RavasonEnterpriseLicenseService;
