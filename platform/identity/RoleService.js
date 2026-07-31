/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * RoleService.js
 */

const RoleModel =
    require("./RoleModel");

const RoleRepository =
    require("./RoleRepository");

class RoleService {

    create(data = {}) {

        const role =
            new RoleModel(data);

        return RoleRepository.save(
            role
        );

    }

    update(id, updates = {}) {

        const role =
            RoleRepository.findById(id);

        if (!role) {

            throw new Error(
                "Role not found."
            );

        }

        Object.assign(
            role,
            updates,
            {

                updatedAt:
                    new Date().toISOString()

            }
        );

        return RoleRepository.save(
            role
        );

    }

    assignPermission(
        roleId,
        permission
    ) {

        const role =
            RoleRepository.findById(
                roleId
            );

        if (!role) {

            throw new Error(
                "Role not found."
            );

        }

        role.addPermission(
            permission
        );

        return RoleRepository.save(
            role
        );

    }

    revokePermission(
        roleId,
        permission
    ) {

        const role =
            RoleRepository.findById(
                roleId
            );

        if (!role) {

            throw new Error(
                "Role not found."
            );

        }

        role.removePermission(
            permission
        );

        return RoleRepository.save(
            role
        );

    }

    getById(id) {

        return RoleRepository.findById(
            id
        );

    }

    getByName(name) {

        return RoleRepository.findByName(
            name
        );

    }

    getByTenant(
        tenantId
    ) {

        return RoleRepository.findByTenant(
            tenantId
        );

    }

    getAll() {

        return RoleRepository.findAll();

    }

    remove(id) {

        return RoleRepository.delete(
            id
        );

    }

}

module.exports =
    new RoleService();
