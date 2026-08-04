/**
 * Ravason Enterprise
 * Notification Platform
 * SMSNotificationService
 */

const NotificationConstants = require("./NotificationConstants");

class SMSNotificationService {

    send(notification) {

        return {
            success: true,
            channel: NotificationConstants.CHANNELS.SMS,
            notificationId: notification.id || null,
            recipient: notification.recipient,
            status: NotificationConstants.STATUS.SENT,
            timestamp: new Date().toISOString()
        };

    }

}

module.exports = SMSNotificationService;
