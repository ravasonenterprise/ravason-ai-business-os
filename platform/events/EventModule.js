/**
 * Ravason Enterprise
 * Event Platform
 * EventModule
 *
 * Registers the Event Platform module.
 */

const EventRuntimeService = require("./EventRuntimeService");

class EventModule {

    constructor() {
        this.name = "events";
        this.version = "1.0.0";
        this.runtime = new EventRuntimeService();
    }

    initialize() {

        this.runtime.initialize();

        return true;

    }

    getName() {
        return this.name;
    }

    getVersion() {
        return this.version;
    }

    getRuntime() {
        return this.runtime;
    }

}

module.exports = EventModule;
