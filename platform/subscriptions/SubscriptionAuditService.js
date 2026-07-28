const RavasonSubscriptionAuditService = {

    logs: [],

    record(event) {

        const log = {

            id:
                crypto.randomUUID(),

            tenantId:
                event.tenantId || null,

            action:
                event.action || "",

            planId:
                event.planId || null,

            entitlement:
                event.entitlement || null,

            result:
                event.result || "unknown",

            performedBy:
                event.performedBy || "system",

            timestamp:
                new Date().toISOString()

        };

        this.logs.push(log);

        return log;

    },

    getAll() {

        return [...this.logs];

    },

    getByTenant(tenantId) {

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

window.RavasonSubscriptionAuditService =
    RavasonSubscriptionAuditService;
