const RavasonTrialLicenseService = {

    create(
        tenantId,
        subscriptionId = ""
    ) {

        const issuedAt =
            new Date();

        const expiresAt =
            new Date(
                issuedAt
            );

        expiresAt.setDate(

            expiresAt.getDate() +

            RavasonLicenseConstants
                .DEFAULTS
                .TRIAL_DAYS

        );

        const license =
            RavasonLicenseModel.create({

                tenantId,

                subscriptionId,

                type:
                    RavasonLicenseConstants
                        .LICENSE_TYPES
                        .TRIAL,

                status:
                    RavasonLicenseConstants
                        .LICENSE_STATUS
                        .PENDING,

                licenseKey:
                    RavasonLicenseKeyGenerator
                        .generate(

                            RavasonLicenseConstants
                                .LICENSE_TYPES
                                .TRIAL

                        ),

                issuedAt:
                    issuedAt.toISOString(),

                expiresAt:
                    expiresAt.toISOString()

            });

        RavasonLicenseStorageService.create(
            license
        );

        if (
            window.RavasonLicenseAuditService
        ) {

            RavasonLicenseAuditService.log(

                "trial_license_created",

                license

            );

        }

        return license;

    },


    isTrial(
        license
    ) {

        return (

            license &&

            license.type ===

            RavasonLicenseConstants
                .LICENSE_TYPES
                .TRIAL

        );

    },


    hasExpired(
        license
    ) {

        if (
            !license ||
            !license.expiresAt
        ) {

            return true;

        }

        return (

            new Date() >

            new Date(
                license.expiresAt
            )

        );

    },


    remainingDays(
        license
    ) {

        if (
            !license ||
            !license.expiresAt
        ) {

            return 0;

        }

        const milliseconds =

            new Date(
                license.expiresAt
            ) -

            new Date();

        return Math.max(

            0,

            Math.ceil(

                milliseconds /

                (
                    1000 *
                    60 *
                    60 *
                    24
                )

            )

        );

    }

};

window.RavasonTrialLicenseService =
    RavasonTrialLicenseService;
