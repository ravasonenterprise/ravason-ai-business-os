/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingCycleService.js
 */

const BillingConstants =
    require("./BillingConstants");

class BillingCycleService {

    getSupportedCycles() {

        return Object.freeze([
            "DAILY",
            "WEEKLY",
            "MONTHLY",
            "QUARTERLY",
            "YEARLY"
        ]);

    }

    calculateNextBillingDate(
        billingDate,
        cycle
    ) {

        const next =
            new Date(billingDate);

        switch (cycle) {

            case "DAILY":
                next.setDate(
                    next.getDate() + 1
                );
                break;

            case "WEEKLY":
                next.setDate(
                    next.getDate() + 7
                );
                break;

            case "MONTHLY":
                next.setMonth(
                    next.getMonth() + 1
                );
                break;

            case "QUARTERLY":
                next.setMonth(
                    next.getMonth() + 3
                );
                break;

            case "YEARLY":
                next.setFullYear(
                    next.getFullYear() + 1
                );
                break;

            default:
                throw new Error(
                    "Unsupported billing cycle."
                );

        }

        return next;

    }

    calculatePeriodEnd(
        periodStart,
        cycle
    ) {

        return this.calculateNextBillingDate(
            periodStart,
            cycle
        );

    }

    isExpired(
        nextBillingDate,
        currentDate = new Date()
    ) {

        return (
            currentDate >=
            new Date(nextBillingDate)
        );

    }

    applyTrialPeriod(
        startDate,
        trialDays = 0
    ) {

        const expiry =
            new Date(startDate);

        expiry.setDate(
            expiry.getDate() +
            Number(trialDays)
        );

        return expiry;

    }

    applyGracePeriod(
        expiryDate,
        graceDays = 0
    ) {

        const grace =
            new Date(expiryDate);

        grace.setDate(
            grace.getDate() +
            Number(graceDays)
        );

        return grace;

    }

}

module.exports =
    new BillingCycleService();
