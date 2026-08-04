/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationModel
 */

const NotificationConstants = require("./NotificationConstants");

class NotificationModel {

    constructor(data = {}) {

        this.id = data.id || null;

        this.channel =
            data.channel ||
            NotificationConstants.CHANNELS.IN_APP;

        this.recipient =
            data.recipient || "";

        this.subject =
            data.subject || "";

        this.message =
            data.message || "";

        this.priority =
            data.priority ||
            NotificationConstants.PRIORITY.NORMAL;

        this.status =
            data.status ||
            NotificationConstants.STATUS.PENDING;

        this.metadata =
            data.metadata || {};

        this.createdAt =
            data.createdAt ||
            new Date().toISOString();

    }

    toJSON() {

        return {
            id: this.id,
            channel: this.channel,
            recipient: this.recipient,
            subject: this.subject,
            message: this.message,
            priority: this.priority,
            status: this.status,
            metadata: this.metadata,
            createdAt: this.createdAt
        };

    }

}

module.exports = NotificationModel;
