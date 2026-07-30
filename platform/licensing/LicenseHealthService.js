/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseHealthService.js
 */

class LicenseHealthService {

    check(license) {

        if (!license) {
            throw new Error(
                "License is required."
            );
        }

        const issues = [];

        if (!license.status) {
            issues.push(
                "Missing license status."
            );
        }

        if (!license.expiresAt) {
            issues.push(
                "No expiration date."
            );
        }
        else if (
            new Date(license.expiresAt) <
            new Date()
        ) {
            issues.push(
                "License has expired."
            );
        }

        const devices =
            Array.isArray(
                license.activatedDevices
            )
                ? license.activatedDevices.length
                : 0;

        if (
            devices >
            Number(
                license.maxDevices || 0
            )
        ) {
            issues.push(
                "Device limit exceeded."
            );
        }

        return {

            healthy:
                issues.length === 0,

            issues

        };

    }

    checkAll(licenses = []) {

        return licenses.map(
            license => ({

                id: license.id,

                ...this.check(license)

            })
        );

    }

}

module.exports =
    new LicenseHealthService();
