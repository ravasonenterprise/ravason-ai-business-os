from pathlib import Path

target = Path("platform/notifications/WebhookNotificationService.js")

content = r'''/**
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
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
