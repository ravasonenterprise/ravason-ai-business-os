from pathlib import Path

target = Path("platform/notifications/NotificationRepository.js")

content = r'''/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationRepository
 *
 * Default in-memory notification repository.
 */

const NotificationModel = require("./NotificationModel");

class NotificationRepository {

    constructor() {
        this.notifications = [];
    }

    save(notification) {

        const model =
            notification instanceof NotificationModel
                ? notification
                : new NotificationModel(notification);

        this.notifications.push(model);

        return model;

    }

    findAll() {
        return [...this.notifications];
    }

    findById(id) {

        return this.notifications.find(
            notification => notification.id === id
        ) || null;

    }

    findByRecipient(recipient) {

        return this.notifications.filter(
            notification => notification.recipient === recipient
        );

    }

    findByStatus(status) {

        return this.notifications.filter(
            notification => notification.status === status
        );

    }

    count() {
        return this.notifications.length;
    }

    clear() {
        this.notifications = [];
    }

}

module.exports = NotificationRepository;
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
