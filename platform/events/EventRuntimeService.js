/**
 * Ravason Enterprise
 * Event Platform
 * EventRuntimeService
 *
 * Initializes and manages the Event Platform runtime.
 */

const EventPublisherService = require("./EventPublisherService");

class EventRuntimeService {

    constructor() {

        this.initialized = false;
        this.publisher = new EventPublisherService();

    }

    initialize() {

        if (this.initialized) {
            return true;
        }

        this.initialized = true;

        return true;

    }

    isInitialized() {

        return this.initialized;

    }

    getPublisher() {

        return this.publisher;

    }

    getStatus() {

        return {
            runtime: "events",
            initialized: this.initialized
        };

    }

}

module.exports = EventRuntimeService;
