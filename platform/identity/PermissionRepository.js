/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * PermissionRepository.js
 */

const PermissionModel =
    require("./PermissionModel");

class PermissionRepository {

    constructor() {

        this.permissions =
            new Map();

    }

    save(permission) {

        const model =
            permission instanceof PermissionModel
                ? permission
                : new PermissionModel(permission);

        if (!model.id) {
            throw new Error(
                "Permission id is required."
            );
        }

        this.permissions.set(
            model.id,
            model
        );

        return model;

    }

    findById(id) {

        return (
            this.permissions.get(id) ||
            null
        );

    }

    findByName(name) {

        for (
            const permission of
            this.permissions.values()
        ) {

            if (
                permission.name === name
            ) {

                return permission;

            }

        }

        return null;

    }

    findByKey(
        resource,
        action
    ) {

        const key =
            resource + ":" + action;

        for (
            const permission of
            this.permissions.values()
        ) {

            if (
                permission.getKey() === key
            ) {

                return permission;

            }

        }

        return null;

    }

    findAll() {

        return Array.from(
            this.permissions.values()
        );

    }

    delete(id) {

        return this.permissions.delete(
            id
        );

    }

    exists(id) {

        return this.permissions.has(
            id
        );

    }

    count() {

        return this.permissions.size;

    }

    clear() {

        this.permissions.clear();

    }

}

module.exports =
    new PermissionRepository();
