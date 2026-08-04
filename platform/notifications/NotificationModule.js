/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationModule
 */

const NotificationRuntimeService = require("./NotificationRuntimeService");

class NotificationModule {

    constructor() {

        this.name = "notifications";
        this.runtime = new NotificationRuntimeService();

    }

    initialize() {

        return this.runtime.initialize();

    }

    getName() {

        return this.name;

    }

    getRuntime() {

        return this.runtime;

    }

    getStatus() {

        return this.runtime.getStatus();

    }

}

module.exports = NotificationModule;
