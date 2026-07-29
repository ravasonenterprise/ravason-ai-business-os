const RavasonLicenseAuditService = {

    STORAGE_KEY:
        "ravason_license_audit_log",


    getAll() {

        return JSON.parse(

            localStorage.getItem(
                this.STORAGE_KEY
            ) || "[]"

        );

    },


    saveAll(
        records
    ) {

        localStorage.setItem(

            this.STORAGE_KEY,

            JSON.stringify(
                records
            )

        );

    },


    log(
        action,
        license,
        details = {}
    ) {

        const records =
            this.getAll();

        const entry = {

            id:
                crypto.randomUUID(),

            action,

            licenseId:
                license ?
                license.id :
                null,

            tenantId:
                license ?
                license.tenantId :
                null,

            subscriptionId:
                license ?
                license.subscriptionId :
                null,

            licenseKey:
                license ?
                license.licenseKey :
                null,

            status:
                license ?
                license.status :
                null,

            details,

            timestamp:
                new Date()
                    .toISOString()

        };

        records.push(
            entry
        );

        this.saveAll(
            records
        );

        return entry;

    },


    getByLicense(
        licenseId
    ) {

        return this.getAll().filter(

            record =>

                record.licenseId ===
                licenseId

        );

    },


    getByTenant(
        tenantId
    ) {

        return this.getAll().filter(

            record =>

                record.tenantId ===
                tenantId

        );

    },


    clear() {

        this.saveAll(
            []
        );

        return true;

    }

};

window.RavasonLicenseAuditService =
    RavasonLicenseAuditService;
