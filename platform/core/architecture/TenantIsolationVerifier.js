/**
 * Ravason Enterprise
 * Platform Core
 * Architecture Compliance Engine
 *
 * TenantIsolationVerifier.js
 *
 * Verifies that Platform services respect
 * tenant isolation boundaries.
 */

const fs = require("fs");

class TenantIsolationVerifier {

    verify(files = []) {

        const violations = [];

        const forbiddenPatterns = [
            "SELECT * FROM",
            "tenantId = null",
            "tenantId=null",
            "ignoreTenant",
            "bypassTenant",
            "disableTenantIsolation"
        ];

        for (const file of files) {

            const content = fs.readFileSync(
                file.path,
                "utf8"
            );

            for (const pattern of forbiddenPatterns) {

                if (content.includes(pattern)) {

                    violations.push({

                        type: "tenant",

                        file: file.relativePath,

                        pattern,

                        message:
                            `Tenant isolation violation: "${pattern}" found in ${file.relativePath}.`

                    });

                }

            }

        }

        return violations;

    }

}

module.exports = TenantIsolationVerifier;
