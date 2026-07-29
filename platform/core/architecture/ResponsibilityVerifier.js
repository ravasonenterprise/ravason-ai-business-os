/**
 * Ravason Enterprise
 * Platform Core
 * Architecture Compliance Engine
 *
 * ResponsibilityVerifier.js
 *
 * Verifies that services remain within their
 * declared architectural responsibilities.
 */

const fs = require("fs");
const ArchitectureRules = require("./ArchitectureRules");

class ResponsibilityVerifier {

    verify(files = []) {

        const violations = [];

        const responsibilities =
            ArchitectureRules.RESPONSIBILITIES;

        for (const file of files) {

            const serviceName =
                file.name.replace(".js", "");

            if (!(serviceName in responsibilities)) {
                continue;
            }

            const content =
                fs.readFileSync(file.path, "utf8");

            const allowed =
                responsibilities[serviceName];

            const prohibitedKeywords = [
                "subscription_pricing",
                "plan_charges",
                "renewal_amount",
                "invoice_creation",
                "payment_processing",
                "receipt_generation"
            ];

            for (const keyword of prohibitedKeywords) {

                if (
                    allowed.includes(keyword)
                ) {
                    continue;
                }

                if (content.includes(keyword)) {

                    violations.push({
                        type: "responsibility",
                        file: file.relativePath,
                        responsibility: keyword,
                        message:
                            `Service "${serviceName}" appears to implement "${keyword}" outside its declared responsibility.`
                    });

                }

            }

        }

        return violations;

    }

}

module.exports = ResponsibilityVerifier;
