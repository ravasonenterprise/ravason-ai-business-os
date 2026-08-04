/**
 * Ravason Enterprise
 * Notification Platform
 * PushNotificationService
 */

const NotificationConstants = require("./NotificationConstants");

class PushNotificationService {

    send(notification) {

        return {
            success: true,
            channel: NotificationConstants.CHANNELS.PUSH,
            notificationId: notification.id || null,
            recipient: notification.recipient,
            status: NotificationConstants.STATUS.SENT,
            timestamp: new Date().toISOString()
        };

    }

}

module.exports = PushNotificationService;
