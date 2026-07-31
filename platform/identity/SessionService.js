/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * SessionService.js
 */

const crypto =
    require("crypto");

const IdentityConstants =
    require("./IdentityConstants");

class SessionService {

    constructor() {

        this.sessions =
            new Map();

    }

    create(user) {

        if (!user) {
            throw new Error(
                "User is required."
            );
        }

        const token =
            crypto.randomUUID();

        const session = {

            token,

            userId:
                user.id,

            tenantId:
                user.tenantId,

            status:
                IdentityConstants
                    .SESSION_STATUS
                    .ACTIVE,

            createdAt:
                new Date()
                    .toISOString(),

            lastActivityAt:
                new Date()
                    .toISOString()

        };

        this.sessions.set(
            token,
            session
        );

        return session;

    }

    get(token) {

        return (
            this.sessions.get(token) ||
            null
        );

    }

    touch(token) {

        const session =
            this.get(token);

        if (!session) {
            return null;
        }

        session.lastActivityAt =
            new Date()
                .toISOString();

        return session;

    }

    terminate(token) {

        const session =
            this.get(token);

        if (!session) {
            return false;
        }

        session.status =
            IdentityConstants
                .SESSION_STATUS
                .TERMINATED;

        return true;

    }

    remove(token) {

        return this.sessions.delete(
            token
        );

    }

    list() {

        return Array.from(
            this.sessions.values()
        );

    }

}

module.exports =
    new SessionService();
