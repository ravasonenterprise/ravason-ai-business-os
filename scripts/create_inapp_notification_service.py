from pathlib import Path

target = Path("platform/notifications/InAppNotificationService.js")

content = r'''/**
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
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
