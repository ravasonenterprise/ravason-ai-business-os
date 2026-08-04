from pathlib import Path

target = Path("platform/notifications/WhatsAppNotificationService.js")

content = r'''/**
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
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
