/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * IdentityNotificationService.js
 */

class IdentityNotificationService {

    constructor() {

        this.notifications = [];

    }

    send(notification = {}) {

        const entry = {

            id:
                notification.id ||
                Date.now().toString(),

            timestamp:
                new Date()
                    .toISOString(),

            userId:
                notification.userId || null,

            tenantId:
                notification.tenantId || null,

            channel:
                notification.channel ||
                "IN_APP",

            subject:
                notification.subject || "",

            message:
                notification.message || "",

            status:
                "QUEUED"

        };

        this.notifications.push(
            entry
        );

        return entry;

    }

    getAll() {

        return [
            ...this.notifications
        ];

    }

    getByUser(
        userId
    ) {

        return this.notifications.filter(

            notification =>

                notification.userId ===
                userId

        );

    }

    clear() {

        this.notifications.length = 0;

    }

}

module.exports =
    new IdentityNotificationService();
