/**
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
