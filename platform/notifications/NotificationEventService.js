/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationEventService
 */

const EventPublisherService = require("../events/EventPublisherService");

class NotificationEventService {

    constructor(eventPublisher = null) {

        this.eventPublisher =
            eventPublisher ||
            new EventPublisherService();

    }

    publish(eventName, payload = {}) {

        return this.eventPublisher.publish({

            eventName,
            source: "notifications",
            payload,
            timestamp: new Date().toISOString()

        });

    }

    notificationCreated(notification) {

        return this.publish(
            "NOTIFICATION_CREATED",
            notification
        );

    }

    notificationQueued(notification) {

        return this.publish(
            "NOTIFICATION_QUEUED",
            notification
        );

    }

    notificationSent(notification) {

        return this.publish(
            "NOTIFICATION_SENT",
            notification
        );

    }

    notificationFailed(notification) {

        return this.publish(
            "NOTIFICATION_FAILED",
            notification
        );

    }

}

module.exports = NotificationEventService;
