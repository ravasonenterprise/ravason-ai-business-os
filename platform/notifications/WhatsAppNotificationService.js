/**
 * Ravason Enterprise
 * Notification Platform
 * WhatsAppNotificationService
 */

const NotificationConstants = require("./NotificationConstants");

class WhatsAppNotificationService {

    send(notification) {

        return {
            success: true,
            channel: NotificationConstants.CHANNELS.WHATSAPP,
            notificationId: notification.id || null,
            recipient: notification.recipient,
            status: NotificationConstants.STATUS.SENT,
            timestamp: new Date().toISOString()
        };

    }

}

module.exports = WhatsAppNotificationService;
