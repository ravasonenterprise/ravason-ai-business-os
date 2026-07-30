/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingAuditService.js
 */

class BillingAuditService {

    constructor() {

        this.records = [];

    }

    log(event = {}) {

        if (!event.tenantId) {
            throw new Error("Tenant ID is required.");
        }

        if (!event.type) {
            throw new Error("Audit event type is required.");
        }

        const record = {

            id:
                event.id ||
                Date.now().toString(),

            tenantId:
                event.tenantId,

            type:
                event.type,

            entity:
                event.entity || null,

            entityId:
                event.entityId || null,

            actor:
                event.actor || "system",

            details:
                event.details || {},

            createdAt:
                new Date().toISOString()

        };

        this.records.push(record);

        return record;

    }

    getAll() {

        return [...this.records];

    }

    getByTenant(tenantId) {

        return this.records.filter(
            record =>
                record.tenantId === tenantId
        );

    }

    getByType(type) {

        return this.records.filter(
            record =>
                record.type === type
        );

    }

    clear() {

        this.records = [];

    }

}

module.exports = new BillingAuditService();
