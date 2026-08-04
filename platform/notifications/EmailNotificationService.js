/**
 * Ravason Enterprise
 * Notification Platform
 * EmailNotificationService
 */

const NotificationConstants = require("./NotificationConstants");

class EmailNotificationService {

    send(notification) {

        return {
            success: true,
            channel: NotificationConstants.CHANNELS.EMAIL,
            notificationId: notification.id || null,
            recipient: notification.recipient,
            subject: notification.subject || "",
            status: NotificationConstants.STATUS.SENT,
            timestamp: new Date().toISOString()
        };

    }

}

module.exports = EmailNotificationService;
