/**
 * Ravason Enterprise
 * Platform Subscription Foundation
 *
 * GracePeriodService.js
 */

const SubscriptionConstants =
    require("./SubscriptionConstants");

class GracePeriodService {

    constructor() {

        this.defaultGraceDays = 7;

    }

    start(subscription, days = this.defaultGraceDays) {

        if (!subscription) {
            throw new Error(
                "Subscription is required."
            );
        }

        const now =
            new Date();

        const expires =
            new Date(now);

        expires.setDate(
            expires.getDate() + days
        );

        subscription.graceStartedAt =
            now.toISOString();

        subscription.graceEndsAt =
            expires.toISOString();

        subscription.status =
            SubscriptionConstants.STATUS.SUSPENDED;

        subscription.updatedAt =
            now.toISOString();

        return subscription;

    }

    isActive(subscription) {

        if (
            !subscription ||
            !subscription.graceEndsAt
        ) {
            return false;
        }

        return (
            new Date(subscription.graceEndsAt) >
            new Date()
        );

    }

    hasExpired(subscription) {

        return !this.isActive(
            subscription
        );

    }

    remainingDays(subscription) {

        if (!this.isActive(subscription)) {
            return 0;
        }

        const now =
            new Date();

        const end =
            new Date(
                subscription.graceEndsAt
            );

        return Math.ceil(
            (end - now) /
            (1000 * 60 * 60 * 24)
        );

    }

}

module.exports =
    new GracePeriodService();
