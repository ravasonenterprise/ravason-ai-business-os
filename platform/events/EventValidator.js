/**
 * Ravason Enterprise
 * Event Platform
 * EventValidator
 *
 * Validates event payloads before publishing.
 */

const EventConstants = require("./EventConstants");

class EventValidator {

    validate(event = {}) {

        const errors = [];

        if (!event.eventName || typeof event.eventName !== "string") {
            errors.push("eventName is required.");
        }

        if (!event.source || typeof event.source !== "string") {
            errors.push("source is required.");
        }

        if (
            event.priority &&
            !Object.values(EventConstants.PRIORITY).includes(event.priority)
        ) {
            errors.push("Invalid priority.");
        }

        if (
            event.status &&
            !Object.values(EventConstants.STATUS).includes(event.status)
        ) {
            errors.push("Invalid status.");
        }

        if (
            event.payload &&
            typeof event.payload !== "object"
        ) {
            errors.push("payload must be an object.");
        }

        return {
            valid: errors.length === 0,
            errors
        };
    }

}

module.exports = EventValidator;
