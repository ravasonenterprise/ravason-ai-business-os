/**
 * Ravason Enterprise
 * Notification Platform
 * InAppNotificationService
 */

const NotificationConstants = require("./NotificationConstants");

class InAppNotificationService {

    send(notification) {

        return {
            success: true,
            channel: NotificationConstants.CHANNELS.IN_APP,
            notificationId: notification.id || null,
            recipient: notification.recipient,
            status: NotificationConstants.STATUS.SENT,
            timestamp: new Date().toISOString()
        };

    }

}

module.exports = InAppNotificationService;
