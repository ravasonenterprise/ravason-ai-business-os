/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseNotificationService.js
 */

class LicenseNotificationService {

    constructor() {

        this.handlers =
            new Map();

    }

    register(
        channel,
        handler
    ) {

        if (!channel) {
            throw new Error(
                "Notification channel is required."
            );
        }

        if (
            typeof handler !==
            "function"
        ) {
            throw new Error(
                "Notification handler must be a function."
            );
        }

        this.handlers.set(
            channel,
            handler
        );

    }

    notify(
        channel,
        notification
    ) {

        const handler =
            this.handlers.get(
                channel
            );

        if (!handler) {
            return false;
        }

        handler(notification);

        return true;

    }

    broadcast(
        notification
    ) {

        for (
            const handler of
            this.handlers.values()
        ) {

            handler(notification);

        }

    }

    channels() {

        return Array.from(
            this.handlers.keys()
        );

    }

    unregister(channel) {

        return this.handlers.delete(
            channel
        );

    }

}

module.exports =
    new LicenseNotificationService();
