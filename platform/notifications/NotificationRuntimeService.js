/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationRuntimeService
 */

const NotificationDispatcherService = require("./NotificationDispatcherService");

class NotificationRuntimeService {

    constructor() {

        this.initialized = false;
        this.dispatcher = new NotificationDispatcherService();

    }

    initialize() {

        this.initialized = true;

        return true;

    }

    isInitialized() {

        return this.initialized;

    }

    getDispatcher() {

        return this.dispatcher;

    }

    getStatus() {

        return {
            initialized: this.initialized
        };

    }

}

module.exports = NotificationRuntimeService;
