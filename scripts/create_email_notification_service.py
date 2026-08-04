from pathlib import Path

target = Path("platform/notifications/EmailNotificationService.js")

content = r'''/**
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
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
