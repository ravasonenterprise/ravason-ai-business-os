/**
 * Ravason Enterprise
 * Notification Platform
 * WebhookNotificationService
 */

const NotificationConstants = require("./NotificationConstants");

class WebhookNotificationService {

    send(notification) {

        return {
            success: true,
            channel: NotificationConstants.CHANNELS.WEBHOOK,
            notificationId: notification.id || null,
            recipient: notification.recipient,
            status: NotificationConstants.STATUS.SENT,
            timestamp: new Date().toISOString()
        };

    }

}

module.exports = WebhookNotificationService;
