/**
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
