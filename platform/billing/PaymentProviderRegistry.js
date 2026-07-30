/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * PaymentProviderRegistry.js
 */

const PaymentProviderAdapter =
    require("./PaymentProviderAdapter");

class PaymentProviderRegistry {

    constructor() {

        this.providers = new Map();

    }

    register(name, provider) {

        if (!name) {
            throw new Error(
                "Provider name is required."
            );
        }

        if (
            !(provider instanceof PaymentProviderAdapter)
        ) {
            throw new Error(
                "Provider must extend PaymentProviderAdapter."
            );
        }

        this.providers.set(
            name,
            provider
        );

        return provider;

    }

    has(name) {

        return this.providers.has(name);

    }

    get(name) {

        if (!this.providers.has(name)) {

            throw new Error(
                "Unknown payment provider: " + name
            );

        }

        return this.providers.get(name);

    }

    unregister(name) {

        return this.providers.delete(name);

    }

    clear() {

        this.providers.clear();

    }

    list() {

        return Array.from(
            this.providers.keys()
        ).sort();

    }

    count() {

        return this.providers.size;

    }

}

module.exports =
    new PaymentProviderRegistry();
