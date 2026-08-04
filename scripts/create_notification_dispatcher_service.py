from pathlib import Path

target = Path("platform/notifications/NotificationDispatcherService.js")

content = r'''/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationDispatcherService
 */

class NotificationDispatcherService {

    constructor() {

        this.handlers = new Map();

    }

    register(channel, handler) {

        this.handlers.set(channel, handler);

        return this;

    }

    dispatch(notification) {

        const handler = this.handlers.get(notification.channel);

        if (!handler) {

            return {
                success: false,
                message: "No handler registered for channel: " + notification.channel
            };

        }

        if (typeof handler.send !== "function") {

            return {
                success: false,
                message: "Invalid notification handler."
            };

        }

        return handler.send(notification);

    }

    hasHandler(channel) {

        return this.handlers.has(channel);

    }

    getRegisteredChannels() {

        return [...this.handlers.keys()];

    }

}

module.exports = NotificationDispatcherService;
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
