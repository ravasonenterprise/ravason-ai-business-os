const RavasonLicenseActivationService = {

    activate(
        licenseId,
        deviceId = null
    ) {

        const license =
            RavasonLicenseStorageService.get(
                licenseId
            );

        if (!license) {

            return {
                success: false,
                message: "License not found."
            };

        }

        const validation =
            RavasonLicenseValidator.validate(
                license
            );

        if (!validation.valid) {

            return {
                success: false,
                message: validation.message
            };

        }

        license.status =
            RavasonLicenseConstants
                .LICENSE_STATUS
                .ACTIVE;

        license.activated =
            true;

        if (

            deviceId &&

            !license.deviceIds.includes(
                deviceId
            )

        ) {

            license.deviceIds.push(
                deviceId
            );

        }

        license.updatedAt =
            new Date()
                .toISOString();

        RavasonLicenseStorageService.update(
            license
        );

        return {

            success: true,

            message:
                "License activated successfully.",

            license

        };

    },


    deactivate(
        licenseId
    ) {

        const license =
            RavasonLicenseStorageService.get(
                licenseId
            );

        if (!license) {

            return {
                success: false,
                message: "License not found."
            };

        }

        license.status =
            RavasonLicenseConstants
                .LICENSE_STATUS
                .SUSPENDED;

        license.activated =
            false;

        license.updatedAt =
            new Date()
                .toISOString();

        RavasonLicenseStorageService.update(
            license
        );

        return {

            success: true,

            message:
                "License deactivated successfully.",

            license

        };

    }

};

window.RavasonLicenseActivationService =
    RavasonLicenseActivationService;
