/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseBackupService.js
 */

class LicenseBackupService {

    createBackup(licenses = []) {

        return {

            version: 1,

            createdAt:
                new Date().toISOString(),

            totalLicenses:
                licenses.length,

            licenses:
                JSON.parse(
                    JSON.stringify(
                        licenses
                    )
                )

        };

    }

    restoreBackup(backup) {

        if (!backup) {
            throw new Error(
                "Backup is required."
            );
        }

        return JSON.parse(
            JSON.stringify(
                backup.licenses || []
            )
        );

    }

    validateBackup(backup) {

        return Boolean(
            backup &&
            Array.isArray(
                backup.licenses
            ) &&
            backup.createdAt
        );

    }

    metadata(backup) {

        if (!this.validateBackup(backup)) {
            return null;
        }

        return {

            version:
                backup.version,

            createdAt:
                backup.createdAt,

            totalLicenses:
                backup.totalLicenses

        };

    }

}

module.exports =
    new LicenseBackupService();
