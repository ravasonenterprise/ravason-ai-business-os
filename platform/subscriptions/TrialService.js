/**
 * Ravason Enterprise
 * Platform Subscription Foundation
 *
 * TrialService.js
 */

const SubscriptionConstants =
    require("./SubscriptionConstants");

class TrialService {

    start(subscription) {

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
            expires.getDate() +
            SubscriptionConstants.DEFAULT_TRIAL_DAYS
        );

        subscription.trialStartedAt =
            now.toISOString();

        subscription.trialEndsAt =
            expires.toISOString();

        subscription.status =
            SubscriptionConstants.STATUS.TRIAL;

        subscription.updatedAt =
            now.toISOString();

        return subscription;

    }

    isActive(subscription) {

        if (
            !subscription ||
            !subscription.trialEndsAt
        ) {
            return false;
        }

        return (
            new Date(subscription.trialEndsAt) >
            new Date()
        );

    }

    hasExpired(subscription) {

        return !this.isActive(
            subscription
        );

    }

}

module.exports =
    new TrialService();
