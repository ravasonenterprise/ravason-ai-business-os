/**
 * Ravason Enterprise
 * Event Platform
 * EventSubscriberRegistry
 *
 * Maintains event subscriber registrations.
 */

class EventSubscriberRegistry {

    constructor() {
        this.subscribers = new Map();
    }

    subscribe(eventName, subscriber) {

        if (!this.subscribers.has(eventName)) {
            this.subscribers.set(eventName, []);
        }

        this.subscribers
            .get(eventName)
            .push(subscriber);

        return true;
    }

    unsubscribe(eventName, subscriber) {

        if (!this.subscribers.has(eventName)) {
            return false;
        }

        const updated = this.subscribers
            .get(eventName)
            .filter(item => item !== subscriber);

        this.subscribers.set(eventName, updated);

        return true;
    }

    getSubscribers(eventName) {
        return this.subscribers.get(eventName) || [];
    }

    getSubscriberCount(eventName) {
        return this.getSubscribers(eventName).length;
    }

    clear() {
        this.subscribers.clear();
    }

}

module.exports = EventSubscriberRegistry;
