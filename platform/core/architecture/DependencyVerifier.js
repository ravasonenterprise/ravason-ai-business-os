/**
 * Ravason Enterprise
 * Platform Core
 * Architecture Compliance Engine
 *
 * DependencyVerifier.js
 *
 * Verifies that project dependencies comply with
 * ArchitectureRules.
 */

const fs = require("fs");
const ArchitectureRules = require("./ArchitectureRules");

class DependencyVerifier {

    verify(files = []) {

        const violations = [];

        const dependencyRules = ArchitectureRules.DEPENDENCIES;

        for (const file of files) {

            const content = fs.readFileSync(
                file.path,
                "utf8"
            );

            for (const [directory, rule] of Object.entries(dependencyRules)) {

                if (!file.relativePath.startsWith(directory)) {
                    continue;
                }

                for (const forbidden of rule.forbidden) {

                    if (content.includes(forbidden)) {

                        violations.push({
                            type: "dependency",
                            file: file.relativePath,
                            forbiddenDependency: forbidden,
                            message:
                                `Forbidden dependency "${forbidden}" found in ${file.relativePath}`
                        });

                    }

                }

            }

        }

        return violations;

    }

}

module.exports = DependencyVerifier;
