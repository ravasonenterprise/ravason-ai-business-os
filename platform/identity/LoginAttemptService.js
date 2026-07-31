/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * LoginAttemptService.js
 */

class LoginAttemptService {

    constructor() {

        this.attempts =
            new Map();

    }

    recordFailure(
        username
    ) {

        const current =
            this.attempts.get(
                username
            ) || {

                failures: 0,

                lastFailureAt: null

            };

        current.failures++;

        current.lastFailureAt =
            new Date()
                .toISOString();

        this.attempts.set(
            username,
            current
        );

        return current;

    }

    recordSuccess(
        username
    ) {

        this.attempts.delete(
            username
        );

        return true;

    }

    getAttempts(
        username
    ) {

        return (
            this.attempts.get(
                username
            ) || {

                failures: 0,

                lastFailureAt: null

            }
        );

    }

    reset(
        username
    ) {

        return this.attempts.delete(
            username
        );

    }

    clear() {

        this.attempts.clear();

    }

}

module.exports =
    new LoginAttemptService();
