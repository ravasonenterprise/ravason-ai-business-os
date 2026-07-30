/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseRepository.js
 */

class LicenseRepository {

    constructor() {

        this.licenses =
            new Map();

    }

    save(license) {

        if (
            !license ||
            !license.id
        ) {
            throw new Error(
                "A license with an id is required."
            );
        }

        this.licenses.set(
            license.id,
            license
        );

        return license;

    }

    findById(id) {

        return (
            this.licenses.get(id) ||
            null
        );

    }

    findAll() {

        return Array.from(
            this.licenses.values()
        );

    }

    remove(id) {

        return this.licenses.delete(
            id
        );

    }

    exists(id) {

        return this.licenses.has(
            id
        );

    }

    count() {

        return this.licenses.size;

    }

    clear() {

        this.licenses.clear();

    }

}

module.exports =
    new LicenseRepository();
