const RavasonLicenseResolverService = {

    resolveById(
        licenseId
    ) {

        return (
            RavasonLicenseStorageService.get(
                licenseId
            ) || null
        );

    },


    resolveByKey(
        licenseKey
    ) {

        return (

            RavasonLicenseStorageService
                .getAll()
                .find(

                    license =>

                        license.licenseKey ===
                        licenseKey

                ) ||

            null

        );

    },


    resolveByTenant(
        tenantId
    ) {

        return (

            RavasonLicenseStorageService
                .getAll()
                .filter(

                    license =>

                        license.tenantId ===
                        tenantId

                )

        );

    },


    resolveBySubscription(
        subscriptionId
    ) {

        return (

            RavasonLicenseStorageService
                .getAll()
                .filter(

                    license =>

                        license.subscriptionId ===
                        subscriptionId

                )

        );

    },


    resolveActiveLicense(
        tenantId
    ) {

        return (

            this.resolveByTenant(
                tenantId
            ).find(

                license =>

                    license.status ===

                    RavasonLicenseConstants
                        .LICENSE_STATUS
                        .ACTIVE

            ) ||

            null

        );

    },


    exists(
        licenseId
    ) {

        return (

            this.resolveById(
                licenseId
            ) !== null

        );

    }

};

window.RavasonLicenseResolverService =
    RavasonLicenseResolverService;
