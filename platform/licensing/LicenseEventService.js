/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseEventService.js
 */

class LicenseEventService {

    constructor() {

        this.listeners =
            new Map();

    }

    subscribe(
        event,
        listener
    ) {

        if (
            typeof listener !==
            "function"
        ) {
            throw new Error(
                "Listener must be a function."
            );
        }

        if (
            !this.listeners.has(event)
        ) {
            this.listeners.set(
                event,
                []
            );
        }

        this.listeners
            .get(event)
            .push(listener);

    }

    unsubscribe(
        event,
        listener
    ) {

        if (
            !this.listeners.has(event)
        ) {
            return;
        }

        this.listeners.set(
            event,
            this.listeners
                .get(event)
                .filter(
                    item =>
                        item !== listener
                )
        );

    }

    publish(
        event,
        payload = {}
    ) {

        if (
            !this.listeners.has(event)
        ) {
            return;
        }

        for (
            const listener of
            this.listeners.get(event)
        ) {

            listener(payload);

        }

    }

    clear(event) {

        if (event) {

            this.listeners.delete(
                event
            );

            return;

        }

        this.listeners.clear();

    }

}

module.exports =
    new LicenseEventService();
