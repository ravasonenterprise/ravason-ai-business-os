/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * RoleModel.js
 */

class RoleModel {

    constructor(data = {}) {

        this.id =
            data.id || null;

        this.tenantId =
            data.tenantId || null;

        this.name =
            data.name || "";

        this.displayName =
            data.displayName || "";

        this.description =
            data.description || "";

        this.permissions =
            Array.isArray(
                data.permissions
            )
                ? data.permissions
                : [];

        this.system =
            Boolean(data.system);

        this.createdAt =
            data.createdAt ||
            new Date().toISOString();

        this.updatedAt =
            data.updatedAt ||
            new Date().toISOString();

    }

    hasPermission(
        permission
    ) {

        return this.permissions.includes(
            permission
        );

    }

    addPermission(
        permission
    ) {

        if (
            !this.hasPermission(
                permission
            )
        ) {

            this.permissions.push(
                permission
            );

        }

    }

    removePermission(
        permission
    ) {

        this.permissions =
            this.permissions.filter(
                item =>
                    item !==
                    permission
            );

    }

    toJSON() {

        return {

            id: this.id,
            tenantId: this.tenantId,
            name: this.name,
            displayName:
                this.displayName,
            description:
                this.description,
            permissions:
                this.permissions,
            system:
                this.system,
            createdAt:
                this.createdAt,
            updatedAt:
                this.updatedAt

        };

    }

}

module.exports =
    RoleModel;
