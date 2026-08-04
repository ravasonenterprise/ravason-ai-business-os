from pathlib import Path

target = Path("platform/notifications/NotificationSchedulerService.js")

content = r'''/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationSchedulerService
 */

class NotificationSchedulerService {

    constructor() {

        this.scheduledNotifications = [];

    }

    schedule(notification, scheduledTime) {

        this.scheduledNotifications.push({
            notification,
            scheduledTime
        });

        return true;

    }

    getScheduledNotifications() {

        return [...this.scheduledNotifications];

    }

    getDueNotifications(currentTime = new Date()) {

        return this.scheduledNotifications.filter(item => {

            return new Date(item.scheduledTime) <= currentTime;

        });

    }

    clear() {

        this.scheduledNotifications = [];

    }

}

module.exports = NotificationSchedulerService;
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
