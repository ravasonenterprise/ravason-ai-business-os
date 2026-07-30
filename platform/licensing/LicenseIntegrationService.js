/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseIntegrationService.js
 */

class LicenseIntegrationService {

    constructor() {

        this.services = new Map();

    }

    register(name, service) {

        if (!name) {
            throw new Error(
                "Service name is required."
            );
        }

        if (!service) {
            throw new Error(
                "Service instance is required."
            );
        }

        this.services.set(
            name,
            service
        );

    }

    get(name) {

        return (
            this.services.get(name) ||
            null
        );

    }

    has(name) {

        return this.services.has(
            name
        );

    }

    list() {

        return Array.from(
            this.services.keys()
        );

    }

    unregister(name) {

        return this.services.delete(
            name
        );

    }

}

module.exports =
    new LicenseIntegrationService();
