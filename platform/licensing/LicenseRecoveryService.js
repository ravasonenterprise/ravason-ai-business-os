/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseRecoveryService.js
 */

const LicenseBackupService =
    require("./LicenseBackupService");

class LicenseRecoveryService {

    recover(backup) {

        if (
            !LicenseBackupService.validateBackup(
                backup
            )
        ) {
            throw new Error(
                "Invalid license backup."
            );
        }

        return {

            recoveredAt:
                new Date().toISOString(),

            licenses:
                LicenseBackupService.restoreBackup(
                    backup
                )

        };

    }

    recoverLicense(
        backup,
        licenseId
    ) {

        const result =
            this.recover(backup);

        return (
            result.licenses.find(
                license =>
                    license.id ===
                    licenseId
            ) || null
        );

    }

    verifyRecovery(result) {

        return Boolean(
            result &&
            Array.isArray(
                result.licenses
            ) &&
            result.recoveredAt
        );

    }

}

module.exports =
    new LicenseRecoveryService();
