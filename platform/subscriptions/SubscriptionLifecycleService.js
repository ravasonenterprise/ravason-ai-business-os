/**
 * Ravason Enterprise
 * Platform Subscription Foundation
 *
 * SubscriptionLifecycleService.js
 */

const SubscriptionConstants =
    require("./SubscriptionConstants");

const TrialService =
    require("./TrialService");

const GracePeriodService =
    require("./GracePeriodService");

class SubscriptionLifecycleService {

    activate(subscription) {

        if (!subscription) {
            throw new Error(
                "Subscription is required."
            );
        }

        subscription.status =
            SubscriptionConstants.STATUS.ACTIVE;

        subscription.activatedAt =
            new Date().toISOString();

        subscription.updatedAt =
            subscription.activatedAt;

        return subscription;

    }

    startTrial(subscription) {

        return TrialService.start(
            subscription
        );

    }

    suspend(subscription) {

        if (!subscription) {
            throw new Error(
                "Subscription is required."
            );
        }

        subscription.status =
            SubscriptionConstants.STATUS.SUSPENDED;

        subscription.updatedAt =
            new Date().toISOString();

        return subscription;

    }

    startGracePeriod(
        subscription,
        days
    ) {

        return GracePeriodService.start(
            subscription,
            days
        );

    }

    expire(subscription) {

        if (!subscription) {
            throw new Error(
                "Subscription is required."
            );
        }

        subscription.status =
            SubscriptionConstants.STATUS.EXPIRED;

        subscription.expiredAt =
            new Date().toISOString();

        subscription.updatedAt =
            subscription.expiredAt;

        return subscription;

    }

    cancel(subscription) {

        if (!subscription) {
            throw new Error(
                "Subscription is required."
            );
        }

        subscription.status =
            SubscriptionConstants.STATUS.CANCELLED;

        subscription.cancelledAt =
            new Date().toISOString();

        subscription.updatedAt =
            subscription.cancelledAt;

        return subscription;

    }

}

module.exports =
    new SubscriptionLifecycleService();
