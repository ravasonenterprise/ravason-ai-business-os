/**
 * Ravason Enterprise
 * Platform Subscription Foundation
 *
 * PlanDowngradeService.js
 */

const PlanCatalogService =
    require("./PlanCatalogService");

const PlanVersionService =
    require("./PlanVersionService");

class PlanDowngradeService {

    downgrade(subscription, targetPlanId) {

        if (!subscription) {
            throw new Error(
                "Subscription is required."
            );
        }

        if (!targetPlanId) {
            throw new Error(
                "Target plan is required."
            );
        }

        const plan =
            PlanCatalogService.get(
                targetPlanId
            );

        if (!plan) {
            throw new Error(
                "Unknown plan: " +
                targetPlanId
            );
        }

        const version =
            PlanVersionService.latest(
                targetPlanId
            );

        subscription.planId =
            targetPlanId;

        subscription.planVersion =
            version
                ? version.version
                : "1.0.0";

        subscription.updatedAt =
            new Date().toISOString();

        return subscription;

    }

}

module.exports =
    new PlanDowngradeService();
