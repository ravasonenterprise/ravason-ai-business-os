/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * AuthorizationService.js
 */

class AuthorizationService {

    hasPermission(
        user,
        permission
    ) {

        if (
            !user ||
            !permission
        ) {
            return false;
        }

        const permissions =
            Array.isArray(
                user.permissions
            )
                ? user.permissions
                : [];

        return permissions.includes(
            permission
        );

    }

    hasAnyPermission(
        user,
        permissions = []
    ) {

        return permissions.some(
            permission =>
                this.hasPermission(
                    user,
                    permission
                )
        );

    }

    hasAllPermissions(
        user,
        permissions = []
    ) {

        return permissions.every(
            permission =>
                this.hasPermission(
                    user,
                    permission
                )
        );

    }

    authorize(
        user,
        permission
    ) {

        if (
            !this.hasPermission(
                user,
                permission
            )
        ) {

            throw new Error(
                "Access denied."
            );

        }

        return true;

    }

}

module.exports =
    new AuthorizationService();
