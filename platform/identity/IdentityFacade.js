/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * IdentityFacade.js
 */

const IdentityModule =
    require("./IdentityModule");

class IdentityFacade {

    users() {

        return IdentityModule
            .userService;

    }

    roles() {

        return IdentityModule
            .roleService;

    }

    permissions() {

        return IdentityModule
            .permissionService;

    }

    authentication() {

        return IdentityModule
            .authenticationService;

    }

    authorization() {

        return IdentityModule
            .authorizationService;

    }

    sessions() {

        return IdentityModule
            .sessionService;

    }

    security() {

        return {

            passwordHasher:
                IdentityModule
                    .passwordHasher,

            passwordPolicy:
                IdentityModule
                    .passwordPolicyService,

            mfa:
                IdentityModule
                    .mfaService,

            loginAttempts:
                IdentityModule
                    .loginAttemptService,

            accountLockout:
                IdentityModule
                    .accountLockoutService

        };

    }

    audit() {

        return IdentityModule
            .identityAuditService;

    }

    events() {

        return IdentityModule
            .identityEventService;

    }

    notifications() {

        return IdentityModule
            .identityNotificationService;

    }

    repository() {

        return IdentityModule
            .repository;

    }

}

module.exports =
    new IdentityFacade();
