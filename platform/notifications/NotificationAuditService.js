/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationAuditService
 */

class NotificationAuditService {

    constructor() {

        this.auditLog = [];

    }

    record(entry = {}) {

        const record = {
            timestamp: new Date().toISOString(),
            ...entry
        };

        this.auditLog.push(record);

        return record;

    }

    getAll() {

        return [...this.auditLog];

    }

    count() {

        return this.auditLog.length;

    }

    clear() {

        this.auditLog = [];

    }

}

module.exports = NotificationAuditService;
