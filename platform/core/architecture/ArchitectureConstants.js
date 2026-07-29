/**
 * Ravason Enterprise
 * Platform Core
 * Architecture Compliance Engine
 *
 * ArchitectureConstants.js
 *
 * Defines shared constants used by the Architecture
 * Compliance Engine.
 */

const ArchitectureConstants = Object.freeze({

    STATUS: Object.freeze({
        PASS: "PASS",
        FAIL: "FAIL",
        WARNING: "WARNING"
    }),

    SEVERITY: Object.freeze({
        LOW: "LOW",
        MEDIUM: "MEDIUM",
        HIGH: "HIGH",
        CRITICAL: "CRITICAL"
    }),

    LAYERS: Object.freeze({
        PLATFORM_CORE: "platform",
        SHARED_MODULES: "modules",
        PRODUCTS: "products",
        DOCUMENTATION: "docs"
    }),

    RULE_TYPES: Object.freeze({
        DEPENDENCY: "dependency",
        RESPONSIBILITY: "responsibility",
        SECURITY: "security",
        TENANT: "tenant",
        AI: "ai",
        BILLING: "billing",
        LICENSING: "licensing"
    })

});

module.exports = ArchitectureConstants;
