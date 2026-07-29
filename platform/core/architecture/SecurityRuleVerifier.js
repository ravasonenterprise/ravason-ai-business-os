/**
 * Ravason Enterprise
 * Platform Core
 * Architecture Compliance Engine
 *
 * SecurityRuleVerifier.js
 *
 * Verifies architectural security boundaries.
 */

const fs = require("fs");

class SecurityRuleVerifier {

    verify(files = []) {

        const violations = [];

        const securityServices = [
            "AuthenticationService",
            "AuthorizationService",
            "TokenService",
            "PasswordService",
            "PasswordHashService",
            "PasswordPolicyService"
        ];

        const forbiddenPatterns = [
            "TODO: bypass authentication",
            "TODO: disable authorization",
            "skipAuthorization",
            "disableSecurity"
        ];

        for (const file of files) {

            const content = fs.readFileSync(
                file.path,
                "utf8"
            );

            for (const pattern of forbiddenPatterns) {

                if (content.includes(pattern)) {

                    violations.push({
                        type: "security",
                        file: file.relativePath,
                        pattern,
                        message:
                            `Forbidden security pattern "${pattern}" detected.`
                    });

                }

            }

            if (
                file.relativePath.startsWith("platform/authentication") &&
                !securityServices.some(service => content.includes(service))
            ) {

                // Reserved for future security consistency checks.

            }

        }

        return violations;

    }

}

module.exports = SecurityRuleVerifier;
