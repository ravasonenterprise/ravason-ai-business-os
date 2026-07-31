/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * IdentityAuditService.js
 */

class IdentityAuditService {

    constructor() {

        this.records = [];

    }

    record(event = {}) {

        const entry = {

            id:
                event.id ||
                Date.now().toString(),

            timestamp:
                new Date()
                    .toISOString(),

            userId:
                event.userId || null,

            tenantId:
                event.tenantId || null,

            action:
                event.action || "",

            resource:
                event.resource || "",

            outcome:
                event.outcome ||
                "SUCCESS",

            metadata:
                event.metadata || {}

        };

        this.records.push(
            entry
        );

        return entry;

    }

    getAll() {

        return [
            ...this.records
        ];

    }

    getByUser(
        userId
    ) {

        return this.records.filter(
            record =>
                record.userId ===
                userId
        );

    }

    clear() {

        this.records.length = 0;

    }

}

module.exports =
    new IdentityAuditService();
