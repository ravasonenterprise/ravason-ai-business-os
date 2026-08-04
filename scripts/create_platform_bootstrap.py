from pathlib import Path

target = Path("platform/runtime/PlatformBootstrap.js")

content = r'''/**
 * Ravason Enterprise
 * Platform Runtime
 * PlatformBootstrap
 */

const EventRuntimeService = require("../events/EventRuntimeService");
const NotificationRuntimeService = require("../notifications/NotificationRuntimeService");

class PlatformBootstrap {

    constructor() {

        this.registeredRuntimes = {};

    }

    initialize() {

        const eventRuntime = new EventRuntimeService();
        eventRuntime.initialize();

        const notificationRuntime = new NotificationRuntimeService();
        notificationRuntime.initialize();

        this.registeredRuntimes.events = eventRuntime;
        this.registeredRuntimes.notifications = notificationRuntime;

        return true;

    }

    getRegisteredRuntimes() {

        return Object.keys(this.registeredRuntimes);

    }

    getRuntimeCount() {

        return this.getRegisteredRuntimes().length;

    }

}

module.exports = PlatformBootstrap;
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
