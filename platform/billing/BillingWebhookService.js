/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingWebhookService.js
 */

const BillingEventService =
    require("./BillingEventService");

class BillingWebhookService {

    constructor() {

        this.handlers = new Map();

    }

    register(provider, handler) {

        if (!provider) {
            throw new Error(
                "Provider name is required."
            );
        }

        if (
            typeof handler !== "function"
        ) {
            throw new Error(
                "Handler must be a function."
            );
        }

        this.handlers.set(
            provider,
            handler
        );

    }

    has(provider) {

        return this.handlers.has(
            provider
        );

    }

    handle(provider, payload = {}) {

        if (
            !this.handlers.has(provider)
        ) {

            throw new Error(
                "Unsupported payment provider: " +
                provider
            );

        }

        const handler =
            this.handlers.get(provider);

        const result =
            handler(payload);

        BillingEventService.publish(
            "billing.webhook.received",
            {
                provider,
                payload,
                result,
                receivedAt:
                    new Date().toISOString()
            }
        );

        return result;

    }

    unregister(provider) {

        return this.handlers.delete(
            provider
        );

    }

    listProviders() {

        return Array.from(
            this.handlers.keys()
        ).sort();

    }

    clear() {

        this.handlers.clear();

    }

}

module.exports =
    new BillingWebhookService();
