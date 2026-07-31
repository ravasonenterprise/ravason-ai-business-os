/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * IdentityModule.js
 */

module.exports = Object.freeze({

    constants:
        require("./IdentityConstants"),

    repository:
        require("./IdentityRepository"),

    userService:
        require("./UserService"),

    roleService:
        require("./RoleService"),

    permissionService:
        require("./PermissionService"),

    authenticationService:
        require("./AuthenticationService"),

    authorizationService:
        require("./AuthorizationService"),

    sessionService:
        require("./SessionService"),

    passwordHasher:
        require("./PasswordHasher"),

    passwordPolicyService:
        require("./PasswordPolicyService"),

    mfaService:
        require("./MFAService"),

    loginAttemptService:
        require("./LoginAttemptService"),

    accountLockoutService:
        require("./AccountLockoutService"),

    identityAuditService:
        require("./IdentityAuditService"),

    identityEventService:
        require("./IdentityEventService"),

    identityNotificationService:
        require("./IdentityNotificationService")

});
