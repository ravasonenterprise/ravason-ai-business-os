/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * IdentityEventService.js
 */

class IdentityEventService {

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
            !this.listeners.has(
                event
            )
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

    publish(
        event,
        payload = {}
    ) {

        const listeners =
            this.listeners.get(
                event
            ) || [];

        for (
            const listener of
            listeners
        ) {

            listener(
                payload
            );

        }

    }

    unsubscribe(
        event,
        listener
    ) {

        const listeners =
            this.listeners.get(
                event
            );

        if (!listeners) {

            return false;

        }

        this.listeners.set(

            event,

            listeners.filter(

                item =>

                    item !==
                    listener

            )

        );

        return true;

    }

    clear() {

        this.listeners.clear();

    }

}

module.exports =
    new IdentityEventService();
