/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseMigrationService.js
 */

class LicenseMigrationService {

    migrate(
        license,
        targetVersion
    ) {

        if (!license) {
            throw new Error(
                "License is required."
            );
        }

        if (!targetVersion) {
            throw new Error(
                "Target version is required."
            );
        }

        const migrated = {

            ...license,

            schemaVersion:
                targetVersion,

            migratedAt:
                new Date().toISOString()

        };

        return migrated;

    }

    migrateAll(
        licenses = [],
        targetVersion
    ) {

        return licenses.map(
            license =>
                this.migrate(
                    license,
                    targetVersion
                )
        );

    }

    requiresMigration(
        license,
        currentVersion
    ) {

        if (!license) {
            return false;
        }

        return (
            license.schemaVersion !==
            currentVersion
        );

    }

}

module.exports =
    new LicenseMigrationService();
