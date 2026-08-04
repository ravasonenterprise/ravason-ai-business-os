from pathlib import Path

target = Path("platform/events/EventPublisherService.js")

content = r'''/**
 * Ravason Enterprise
 * Event Platform
 * EventPublisherService
 *
 * Public event publishing service.
 */

const EventBus = require("./EventBus");

class EventPublisherService {

    constructor() {
        this.eventBus = new EventBus();
    }

    publish(event) {

        return this.eventBus.publish(event);

    }

    subscribe(eventName, subscriber) {

        return this.eventBus.subscribe(
            eventName,
            subscriber
        );

    }

    unsubscribe(eventName, subscriber) {

        return this.eventBus.unsubscribe(
            eventName,
            subscriber
        );

    }

    getEvents() {

        return this.eventBus.getEvents();

    }

    getEventCount() {

        return this.eventBus.getEventCount();

    }

    clear() {

        this.eventBus.clear();

    }

}

module.exports = EventPublisherService;
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
