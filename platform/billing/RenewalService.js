/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * RenewalService.js
 */

const BillingCycleService =
    require("./BillingCycleService");

class RenewalService {

    isRenewalDue(
        nextBillingDate,
        currentDate = new Date()
    ) {

        return BillingCycleService.isExpired(
            nextBillingDate,
            currentDate
        );

    }

    calculateNextRenewalDate(
        currentBillingDate,
        billingCycle
    ) {

        return BillingCycleService.calculateNextBillingDate(
            currentBillingDate,
            billingCycle
        );

    }

    prepareRenewal(
        subscription = {}
    ) {

        if (!subscription.tenantId) {

            throw new Error(
                "tenantId is required."
            );

        }

        if (!subscription.subscriptionId) {

            throw new Error(
                "subscriptionId is required."
            );

        }

        if (!subscription.billingCycle) {

            throw new Error(
                "billingCycle is required."
            );

        }

        if (!subscription.nextBillingDate) {

            throw new Error(
                "nextBillingDate is required."
            );

        }

        return {

            tenantId:
                subscription.tenantId,

            subscriptionId:
                subscription.subscriptionId,

            renewalDue:
                this.isRenewalDue(
                    subscription.nextBillingDate
                ),

            nextRenewalDate:
                this.calculateNextRenewalDate(
                    subscription.nextBillingDate,
                    subscription.billingCycle
                )

        };

    }

}

module.exports =
    new RenewalService();
