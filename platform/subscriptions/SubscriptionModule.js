/**
 * Ravason Enterprise
 * Platform Subscription Foundation
 *
 * SubscriptionModule.js
 */

module.exports = Object.freeze({

    constants:
        require("./SubscriptionConstants"),

    customerSubscriptionModel:
        require("./CustomerSubscriptionModel"),

    subscriptionPlanModel:
        require("./SubscriptionPlanModel"),

    entitlementModel:
        require("./EntitlementModel"),

    customerSubscriptionService:
        require("./CustomerSubscriptionService"),

    subscriptionPlanService:
        require("./SubscriptionPlanService"),

    planDefinitionService:
        require("./PlanDefinitionService"),

    planCatalogService:
        require("./PlanCatalogService"),

    planVersionService:
        require("./PlanVersionService"),

    planUpgradeService:
        require("./PlanUpgradeService"),

    planDowngradeService:
        require("./PlanDowngradeService"),

    subscriptionLifecycleService:
        require("./SubscriptionLifecycleService"),

    trialService:
        require("./TrialService"),

    gracePeriodService:
        require("./GracePeriodService"),

    entitlementService:
        require("./EntitlementService"),

    aiEntitlementService:
        require("./AIEntitlementService"),

    aiUsageTierService:
        require("./AIUsageTierService"),

    subscriptionFeatureService:
        require("./SubscriptionFeatureService"),

    planEntitlementResolverService:
        require("./PlanEntitlementResolverService"),

    subscriptionResolverService:
        require("./SubscriptionResolverService"),

    subscriptionStorageService:
        require("./SubscriptionStorageService"),

    subscriptionBillingService:
        require("./SubscriptionBillingService"),

    subscriptionAuditService:
        require("./SubscriptionAuditService"),

    subscriptionAccessGuardService:
        require("./SubscriptionAccessGuardService")

});
