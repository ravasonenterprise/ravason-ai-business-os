/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * PermissionService.js
 */

const PermissionModel =
    require("./PermissionModel");

const PermissionRepository =
    require("./PermissionRepository");

class PermissionService {

    create(data = {}) {

        const permission =
            new PermissionModel(data);

        return PermissionRepository.save(
            permission
        );

    }

    update(id, updates = {}) {

        const permission =
            PermissionRepository.findById(
                id
            );

        if (!permission) {

            throw new Error(
                "Permission not found."
            );

        }

        Object.assign(
            permission,
            updates,
            {

                updatedAt:
                    new Date().toISOString()

            }
        );

        return PermissionRepository.save(
            permission
        );

    }

    getById(id) {

        return PermissionRepository.findById(
            id
        );

    }

    getByName(name) {

        return PermissionRepository.findByName(
            name
        );

    }

    getByKey(
        resource,
        action
    ) {

        return PermissionRepository.findByKey(
            resource,
            action
        );

    }

    getAll() {

        return PermissionRepository.findAll();

    }

    exists(id) {

        return PermissionRepository.exists(
            id
        );

    }

    remove(id) {

        return PermissionRepository.delete(
            id
        );

    }

    count() {

        return PermissionRepository.count();

    }

}

module.exports =
    new PermissionService();
