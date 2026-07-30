/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseComplianceService.js
 */

class LicenseComplianceService {

    evaluate(license) {

        if (!license) {
            throw new Error(
                "License is required."
            );
        }

        const violations = [];

        if (!license.id) {
            violations.push(
                "Missing license id."
            );
        }

        if (!license.tenantId) {
            violations.push(
                "Missing tenant id."
            );
        }

        if (!license.status) {
            violations.push(
                "Missing license status."
            );
        }

        if (!license.type) {
            violations.push(
                "Missing license type."
            );
        }

        if (!license.expiresAt) {
            violations.push(
                "Missing expiration date."
            );
        }

        return {

            compliant:
                violations.length === 0,

            violations

        };

    }

    evaluateAll(
        licenses = []
    ) {

        return licenses.map(
            license => ({

                id: license.id,

                ...this.evaluate(
                    license
                )

            })
        );

    }

}

module.exports =
    new LicenseComplianceService();
