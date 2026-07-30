/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingNotificationService.js
 */

class BillingNotificationService {

    constructor() {

        this.handlers = [];

    }

    register(handler) {

        if (typeof handler !== "function") {
            throw new Error(
                "Notification handler must be a function."
            );
        }

        this.handlers.push(handler);

    }

    notify(event = {}) {

        if (!event.tenantId) {
            throw new Error("Tenant ID is required.");
        }

        if (!event.type) {
            throw new Error("Notification type is required.");
        }

        const notification = {

            id:
                event.id ||
                Date.now().toString(),

            tenantId:
                event.tenantId,

            customerId:
                event.customerId || null,

            type:
                event.type,

            subject:
                event.subject || "",

            message:
                event.message || "",

            metadata:
                event.metadata || {},

            createdAt:
                new Date().toISOString()

        };

        for (const handler of this.handlers) {

            handler(notification);

        }

        return notification;

    }

    clearHandlers() {

        this.handlers = [];

    }

}

module.exports =
    new BillingNotificationService();
