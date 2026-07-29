/**
 * Ravason Enterprise
 * Platform Core
 * Architecture Compliance Engine
 *
 * ArchitectureReportService.js
 *
 * Aggregates verification results into a single
 * architecture compliance report.
 */

const ArchitectureConstants = require("./ArchitectureConstants");

class ArchitectureReportService {

    create(results = []) {

        const violations = [];

        for (const result of results) {

            if (Array.isArray(result)) {
                violations.push(...result);
            }

        }

        return {

            status:
                violations.length === 0
                    ? ArchitectureConstants.STATUS.PASS
                    : ArchitectureConstants.STATUS.FAIL,

            totalViolations: violations.length,

            violations

        };

    }

    print(report) {

        console.log("");
        console.log("=================================");
        console.log("RAVASON ARCHITECTURE REPORT");
        console.log("=================================");
        console.log("Status :", report.status);
        console.log("Violations :", report.totalViolations);

        if (report.violations.length) {

            console.log("");

            for (const violation of report.violations) {

                console.log(
                    "-",
                    violation.type,
                    "|",
                    violation.file
                );

                console.log(
                    "  ",
                    violation.message
                );

            }

        }

        console.log("");

    }

}

module.exports = new ArchitectureReportService();
