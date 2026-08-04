from pathlib import Path

target = Path("platform/events/EventModule.js")

content = r'''/**
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
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
