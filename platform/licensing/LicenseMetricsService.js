/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseMetricsService.js
 */

class LicenseMetricsService {

    summarize(licenses = []) {

        const metrics = {

            total: licenses.length,

            active: 0,

            inactive: 0,

            expired: 0,

            trial: 0,

            enterprise: 0

        };

        const now = new Date();

        for (const license of licenses) {

            if (
                license.status === "ACTIVE"
            ) {

                metrics.active++;

            }
            else {

                metrics.inactive++;

            }

            if (
                license.expiresAt &&
                new Date(
                    license.expiresAt
                ) < now
            ) {

                metrics.expired++;

            }

            if (
                license.type === "TRIAL"
            ) {

                metrics.trial++;

            }

            if (
                license.type ===
                "ENTERPRISE"
            ) {

                metrics.enterprise++;

            }

        }

        return metrics;

    }

}

module.exports =
    new LicenseMetricsService();
