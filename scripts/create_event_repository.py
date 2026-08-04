from pathlib import Path

target = Path("platform/events/EventRepository.js")

content = r'''/**
 * Ravason Enterprise
 * Event Platform
 * EventRepository
 *
 * Default in-memory repository.
 * Can later be replaced with database-backed storage
 * without affecting the rest of the Event Platform.
 */

const EventModel = require("./EventModel");

class EventRepository {

    constructor() {
        this.events = [];
    }

    save(event) {

        const model =
            event instanceof EventModel
                ? event
                : new EventModel(event);

        this.events.push(model);

        return model;
    }

    findAll() {
        return [...this.events];
    }

    findById(id) {

        return this.events.find(
            event => event.id === id
        ) || null;

    }

    findByEventName(eventName) {

        return this.events.filter(
            event => event.eventName === eventName
        );

    }

    findBySource(source) {

        return this.events.filter(
            event => event.source === source
        );

    }

    count() {
        return this.events.length;
    }

    clear() {
        this.events = [];
    }

}

module.exports = EventRepository;
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
