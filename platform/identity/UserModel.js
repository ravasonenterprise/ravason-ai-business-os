/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * UserModel.js
 */

const IdentityConstants =
    require("./IdentityConstants");

class UserModel {

    constructor(data = {}) {

        this.id =
            data.id || null;

        this.tenantId =
            data.tenantId || null;

        this.username =
            data.username || "";

        this.email =
            data.email || "";

        this.firstName =
            data.firstName || "";

        this.lastName =
            data.lastName || "";

        this.displayName =
            data.displayName || "";

        this.userType =
            data.userType ||
            IdentityConstants.USER_TYPES.STAFF;

        this.status =
            data.status ||
            IdentityConstants.USER_STATUS.PENDING;

        this.roles =
            Array.isArray(data.roles)
                ? data.roles
                : [];

        this.permissions =
            Array.isArray(data.permissions)
                ? data.permissions
                : [];

        this.mfaEnabled =
            Boolean(data.mfaEnabled);

        this.mfaMethod =
            data.mfaMethod ||
            IdentityConstants.MFA_METHODS.NONE;

        this.emailVerified =
            Boolean(data.emailVerified);

        this.phoneVerified =
            Boolean(data.phoneVerified);

        this.lastLoginAt =
            data.lastLoginAt || null;

        this.createdAt =
            data.createdAt ||
            new Date().toISOString();

        this.updatedAt =
            data.updatedAt ||
            new Date().toISOString();

    }

    getFullName() {

        return (
            this.firstName +
            " " +
            this.lastName
        ).trim();

    }

    isActive() {

        return (
            this.status ===
            IdentityConstants
                .USER_STATUS
                .ACTIVE
        );

    }

    toJSON() {

        return {

            id: this.id,
            tenantId: this.tenantId,
            username: this.username,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            displayName: this.displayName,
            userType: this.userType,
            status: this.status,
            roles: this.roles,
            permissions:
                this.permissions,
            mfaEnabled:
                this.mfaEnabled,
            mfaMethod:
                this.mfaMethod,
            emailVerified:
                this.emailVerified,
            phoneVerified:
                this.phoneVerified,
            lastLoginAt:
                this.lastLoginAt,
            createdAt:
                this.createdAt,
            updatedAt:
                this.updatedAt

        };

    }

}

module.exports =
    UserModel;
