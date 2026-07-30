/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseService.js
 */

const LicenseStorageService =
    require("./LicenseStorageService");

const LicenseActivationService =
    require("./LicenseActivationService");

const LicenseValidator =
    require("./LicenseValidator");

const LicenseResolverService =
    require("./LicenseResolverService");

class LicenseService {

    create(license) {

        return LicenseStorageService.save(
            license
        );

    }

    update(license) {

        return LicenseStorageService.save(
            license
        );

    }

    get(id) {

        return LicenseResolverService.resolve(
            id
        );

    }

    activate(license, context = {}) {

        return LicenseActivationService.activate(
            license,
            context
        );

    }

    validate(license, context = {}) {

        return LicenseValidator.validate(
            license,
            context
        );

    }

    remove(id) {

        if (
            typeof LicenseStorageService.remove !==
            "function"
        ) {
            throw new Error(
                "LicenseStorageService.remove() is not implemented."
            );
        }

        return LicenseStorageService.remove(
            id
        );

    }

    list() {

        if (
            typeof LicenseStorageService.list !==
            "function"
        ) {
            return [];
        }

        return LicenseStorageService.list();

    }

}

module.exports =
    new LicenseService();
