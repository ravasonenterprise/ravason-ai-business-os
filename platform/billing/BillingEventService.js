/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingEventService.js
 */

class BillingEventService {

    constructor() {

        this.listeners = new Map();

    }

    subscribe(eventName, listener) {

        if (!eventName) {
            throw new Error(
                "Event name is required."
            );
        }

        if (
            typeof listener !== "function"
        ) {
            throw new Error(
                "Listener must be a function."
            );
        }

        if (
            !this.listeners.has(eventName)
        ) {

            this.listeners.set(
                eventName,
                []
            );

        }

        this.listeners
            .get(eventName)
            .push(listener);

    }

    unsubscribe(eventName, listener) {

        if (
            !this.listeners.has(eventName)
        ) {
            return false;
        }

        const listeners =
            this.listeners.get(eventName);

        const filtered =
            listeners.filter(
                item => item !== listener
            );

        this.listeners.set(
            eventName,
            filtered
        );

        return true;

    }

    publish(eventName, payload = {}) {

        if (
            !this.listeners.has(eventName)
        ) {
            return;
        }

        for (
            const listener
            of this.listeners.get(eventName)
        ) {

            listener(payload);

        }

    }

    listenerCount(eventName) {

        if (
            !this.listeners.has(eventName)
        ) {
            return 0;
        }

        return this.listeners
            .get(eventName)
            .length;

    }

    clear(eventName = null) {

        if (eventName) {

            this.listeners.delete(
                eventName
            );

            return;

        }

        this.listeners.clear();

    }

}

module.exports =
    new BillingEventService();
