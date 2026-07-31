/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * AccountLockoutService.js
 */

class AccountLockoutService {

    constructor() {

        this.lockedAccounts =
            new Map();

    }

    lock(
        username,
        reason = "Too many failed login attempts."
    ) {

        this.lockedAccounts.set(
            username,
            {
                locked: true,
                reason,
                lockedAt:
                    new Date()
                        .toISOString()
            }
        );

        return true;

    }

    unlock(
        username
    ) {

        return this.lockedAccounts.delete(
            username
        );

    }

    isLocked(
        username
    ) {

        const account =
            this.lockedAccounts.get(
                username
            );

        return Boolean(
            account &&
            account.locked
        );

    }

    getLock(
        username
    ) {

        return (
            this.lockedAccounts.get(
                username
            ) || null
        );

    }

    clear() {

        this.lockedAccounts.clear();

    }

}

module.exports =
    new AccountLockoutService();
