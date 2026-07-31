/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * IdentityRepository.js
 */

const UserRepository =
    require("./UserRepository");

const RoleRepository =
    require("./RoleRepository");

const PermissionRepository =
    require("./PermissionRepository");

class IdentityRepository {

    users() {

        return UserRepository;

    }

    roles() {

        return RoleRepository;

    }

    permissions() {

        return PermissionRepository;

    }

    clear() {

        UserRepository.clear();

        RoleRepository.clear();

        PermissionRepository.clear();

    }

    statistics() {

        return {

            users:
                UserRepository.count(),

            roles:
                RoleRepository.count(),

            permissions:
                PermissionRepository.count()

        };

    }

}

module.exports =
    new IdentityRepository();
