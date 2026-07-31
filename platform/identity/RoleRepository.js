/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * RoleRepository.js
 */

const RoleModel =
    require("./RoleModel");

class RoleRepository {

    constructor() {

        this.roles =
            new Map();

    }

    save(role) {

        const model =
            role instanceof RoleModel
                ? role
                : new RoleModel(role);

        if (!model.id) {
            throw new Error(
                "Role id is required."
            );
        }

        this.roles.set(
            model.id,
            model
        );

        return model;

    }

    findById(id) {

        return (
            this.roles.get(id) ||
            null
        );

    }

    findByName(name) {

        for (
            const role of
            this.roles.values()
        ) {

            if (
                role.name === name
            ) {

                return role;

            }

        }

        return null;

    }

    findByTenant(
        tenantId
    ) {

        return Array.from(
            this.roles.values()
        ).filter(
            role =>
                role.tenantId ===
                tenantId
        );

    }

    findAll() {

        return Array.from(
            this.roles.values()
        );

    }

    delete(id) {

        return this.roles.delete(
            id
        );

    }

    exists(id) {

        return this.roles.has(
            id
        );

    }

    count() {

        return this.roles.size;

    }

    clear() {

        this.roles.clear();

    }

}

module.exports =
    new RoleRepository();
