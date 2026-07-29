const RavasonLicenseModel = {

    create(data = {}) {

        return {

            id:
                data.id || crypto.randomUUID(),

            tenantId:
                data.tenantId || "",

            subscriptionId:
                data.subscriptionId || "",

            licenseKey:
                data.licenseKey || "",

            type:
                data.type ||
                RavasonLicenseConstants
                    .LICENSE_TYPES
                    .SUBSCRIPTION,

            status:
                data.status ||
                RavasonLicenseConstants
                    .LICENSE_STATUS
                    .PENDING,

            activated:
                data.activated || false,

            deviceIds:
                data.deviceIds || [],

            issuedAt:
                data.issuedAt ||
                new Date().toISOString(),

            expiresAt:
                data.expiresAt || null,

            createdAt:
                new Date().toISOString(),

            updatedAt:
                new Date().toISOString()

        };

    },


    validate(license) {

        return (

            license &&

            typeof license.id ===
                "string" &&

            typeof license.tenantId ===
                "string" &&

            typeof license.licenseKey ===
                "string"

        );

    }

};

window.RavasonLicenseModel =
    RavasonLicenseModel;
