const RavasonDeviceRegistrationService = {

    register(
        licenseId,
        deviceId
    ) {

        const license =
            RavasonLicenseStorageService.get(
                licenseId
            );

        if (
            !license
        ) {

            return {
                success: false,
                message: "License not found."
            };

        }

        if (
            !license.deviceIds
        ) {

            license.deviceIds = [];

        }

        if (

            license.deviceIds.includes(
                deviceId
            )

        ) {

            return {

                success: true,

                message:
                    "Device already registered.",

                license

            };

        }

        const maxDevices =

            RavasonLicenseConstants
                .DEFAULTS
                .MAX_DEVICES;

        if (

            license.deviceIds.length >=
            maxDevices

        ) {

            return {

                success: false,

                message:
                    "Maximum registered devices reached."

            };

        }

        license.deviceIds.push(
            deviceId
        );

        license.updatedAt =
            new Date()
                .toISOString();

        RavasonLicenseStorageService.update(
            license
        );

        if (
            window.RavasonLicenseAuditService
        ) {

            RavasonLicenseAuditService.log(

                "device_registered",

                license,

                {
                    deviceId
                }

            );

        }

        return {

            success: true,

            message:
                "Device registered successfully.",

            license

        };

    },


    unregister(
        licenseId,
        deviceId
    ) {

        const license =
            RavasonLicenseStorageService.get(
                licenseId
            );

        if (
            !license
        ) {

            return {

                success: false,

                message:
                    "License not found."

            };

        }

        license.deviceIds =

            (license.deviceIds || [])

                .filter(

                    id =>
                        id !== deviceId

                );

        license.updatedAt =

            new Date()

                .toISOString();

        RavasonLicenseStorageService.update(
            license
        );

        if (
            window.RavasonLicenseAuditService
        ) {

            RavasonLicenseAuditService.log(

                "device_unregistered",

                license,

                {
                    deviceId
                }

            );

        }

        return {

            success: true,

            message:
                "Device removed successfully.",

            license

        };

    },


    isRegistered(
        licenseId,
        deviceId
    ) {

        const license =

            RavasonLicenseStorageService.get(
                licenseId
            );

        if (
            !license
        ) {

            return false;

        }

        return (

            (license.deviceIds || [])

                .includes(
                    deviceId
                )

        );

    },


    getRegisteredDevices(
        licenseId
    ) {

        const license =

            RavasonLicenseStorageService.get(
                licenseId
            );

        if (
            !license
        ) {

            return [];

        }

        return (
            license.deviceIds || []
        );

    }

};

window.RavasonDeviceRegistrationService =
    RavasonDeviceRegistrationService;
