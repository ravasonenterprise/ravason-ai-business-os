/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseModule.js
 */

module.exports = Object.freeze({

    constants:
        require("./LicenseConstants"),

    licenseModel:
        require("./LicenseModel"),

    licenseService:
        require("./LicenseService"),

    licenseRepository:
        require("./LicenseRepository"),

    licenseStorageService:
        require("./LicenseStorageService"),

    licenseActivationService:
        require("./LicenseActivationService"),

    licenseValidator:
        require("./LicenseValidator"),

    licenseResolverService:
        require("./LicenseResolverService"),

    deviceRegistrationService:
        require("./DeviceRegistrationService"),

    seatManagementService:
        require("./SeatManagementService"),

    licenseAuditService:
        require("./LicenseAuditService"),

    trialLicenseService:
        require("./TrialLicenseService"),

    enterpriseLicenseService:
        require("./EnterpriseLicenseService"),

    offlineLicenseService:
        require("./OfflineLicenseService"),

    licenseKeyGenerator:
        require("./LicenseKeyGenerator")


    licenseSyncService:
        require("./LicenseSyncService"),

    licenseMigrationService:
        require("./LicenseMigrationService"),

    licenseBackupService:
        require("./LicenseBackupService"),

    licenseRecoveryService:
        require("./LicenseRecoveryService"),

    licensePolicyService:
        require("./LicensePolicyService"),

    licenseEventService:
        require("./LicenseEventService"),

    licenseNotificationService:
        require("./LicenseNotificationService"),

    licenseSchedulerService:
        require("./LicenseSchedulerService"),

    licenseHealthService:
        require("./LicenseHealthService"),

    licenseMetricsService:
        require("./LicenseMetricsService"),

    licenseComplianceService:
        require("./LicenseComplianceService"),

    licenseIntegrationService:
        require("./LicenseIntegrationService"),
});
