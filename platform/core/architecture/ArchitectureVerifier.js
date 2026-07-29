/**
 * Ravason Enterprise
 * Platform Core
 * Architecture Compliance Engine
 *
 * ArchitectureVerifier.js
 *
 * Main entry point for architecture verification.
 */

const ArchitectureScanner = require("./ArchitectureScanner");
const DependencyVerifier = require("./DependencyVerifier");
const ResponsibilityVerifier = require("./ResponsibilityVerifier");
const SecurityRuleVerifier = require("./SecurityRuleVerifier");
const TenantIsolationVerifier = require("./TenantIsolationVerifier");
const ArchitectureReportService = require("./ArchitectureReportService");

const scanner = new ArchitectureScanner();

const files = scanner.scan();

const results = [

    new DependencyVerifier().verify(files),

    new ResponsibilityVerifier().verify(files),

    new SecurityRuleVerifier().verify(files),

    new TenantIsolationVerifier().verify(files)

];

const report =
    ArchitectureReportService.create(results);

ArchitectureReportService.print(report);

if (report.status !== "PASS") {

    process.exit(1);

}

process.exit(0);
