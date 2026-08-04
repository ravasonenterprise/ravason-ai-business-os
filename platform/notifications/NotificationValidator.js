/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationValidator
 */

const NotificationConstants = require("./NotificationConstants");

class NotificationValidator {

    validate(notification) {

        const errors = [];

        if (!notification) {
            errors.push("Notification is required.");
        } else {

            if (!notification.recipient) {
                errors.push("Recipient is required.");
            }

            if (!notification.message) {
                errors.push("Message is required.");
            }

            if (
                notification.channel &&
                !Object.values(NotificationConstants.CHANNELS)
                    .includes(notification.channel)
            ) {
                errors.push("Invalid notification channel.");
            }

            if (
                notification.priority &&
                !Object.values(NotificationConstants.PRIORITY)
                    .includes(notification.priority)
            ) {
                errors.push("Invalid notification priority.");
            }

        }

        return {
            valid: errors.length === 0,
            errors
        };

    }

}

module.exports = NotificationValidator;
