/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * MFAService.js
 */

const crypto =
    require("crypto");

const IdentityConstants =
    require("./IdentityConstants");

class MFAService {

    constructor() {

        this.challenges =
            new Map();

    }

    generateChallenge(
        user,
        method =
            IdentityConstants
                .MFA_METHODS
                .TOTP
    ) {

        if (!user) {
            throw new Error(
                "User is required."
            );
        }

        const code =
            String(
                crypto.randomInt(
                    0,
                    1000000
                )
            ).padStart(
                6,
                "0"
            );

        const challenge = {

            userId:
                user.id,

            method,

            code,

            createdAt:
                new Date()
                    .toISOString(),

            verified:
                false

        };

        this.challenges.set(
            user.id,
            challenge
        );

        return challenge;

    }

    verifyChallenge(
        userId,
        code
    ) {

        const challenge =
            this.challenges.get(
                userId
            );

        if (!challenge) {
            return false;
        }

        if (
            challenge.code !== code
        ) {
            return false;
        }

        challenge.verified =
            true;

        return true;

    }

    clearChallenge(
        userId
    ) {

        return this.challenges.delete(
            userId
        );

    }

    getChallenge(
        userId
    ) {

        return (
            this.challenges.get(
                userId
            ) || null
        );

    }

}

module.exports =
    new MFAService();
