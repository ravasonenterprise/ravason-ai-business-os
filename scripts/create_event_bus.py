from pathlib import Path

target = Path("platform/events/EventBus.js")

content = r'''/**
 * Ravason Enterprise
 * Event Platform
 * EventBus
 *
 * Central publish/subscribe coordinator.
 */

const EventModel = require("./EventModel");
const EventValidator = require("./EventValidator");
const EventRepository = require("./EventRepository");
const EventDispatcher = require("./EventDispatcher");
const EventSubscriberRegistry = require("./EventSubscriberRegistry");

class EventBus {

    constructor() {

        this.validator = new EventValidator();
        this.repository = new EventRepository();
        this.dispatcher = new EventDispatcher();
        this.registry = new EventSubscriberRegistry();

    }

    subscribe(eventName, subscriber) {

        return this.registry.subscribe(
            eventName,
            subscriber
        );

    }

    unsubscribe(eventName, subscriber) {

        return this.registry.unsubscribe(
            eventName,
            subscriber
        );

    }

    publish(eventData) {

        const validation =
            this.validator.validate(eventData);

        if (!validation.valid) {

            return {
                success: false,
                errors: validation.errors
            };

        }

        const event =
            new EventModel(eventData);

        this.repository.save(event);

        const subscribers =
            this.registry.getSubscribers(
                event.eventName
            );

        const dispatchResults =
            this.dispatcher.dispatch(
                event,
                subscribers
            );

        return {
            success: true,
            event,
            dispatchResults
        };

    }

    getEvents() {
        return this.repository.findAll();
    }

    getEventCount() {
        return this.repository.count();
    }

    clear() {
        this.repository.clear();
        this.registry.clear();
    }

}

module.exports = EventBus;
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
