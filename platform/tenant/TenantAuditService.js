const RavasonTenantAuditService = {

    logs: [],


    record(
        action,
        tenantId,
        details = {}
    ) {

        const entry = {

            id:
                crypto.randomUUID(),

            action,

            tenantId,

            details,

            timestamp:
                new Date()
                    .toISOString()

        };


        this.logs.push(
            entry
        );


        return entry;

    },


    getAll() {

        return [
            ...this.logs
        ];

    },


    getByTenant(
        tenantId
    ) {

        return this.logs.filter(

            log =>
                log.tenantId === tenantId

        );

    },


    clear() {

        this.logs = [];

        return true;

    }

};


window.RavasonTenantAuditService =
    RavasonTenantAuditService;
