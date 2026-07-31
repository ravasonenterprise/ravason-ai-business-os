/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * UserService.js
 */

const UserModel =
    require("./UserModel");

const UserRepository =
    require("./UserRepository");

class UserService {

    create(data = {}) {

        if (
            UserRepository.findByEmail(
                data.email
            )
        ) {
            throw new Error(
                "Email already exists."
            );
        }

        const user =
            new UserModel(data);

        return UserRepository.save(
            user
        );

    }

    update(
        id,
        updates = {}
    ) {

        const user =
            UserRepository.findById(
                id
            );

        if (!user) {
            throw new Error(
                "User not found."
            );
        }

        Object.assign(
            user,
            updates,
            {
                updatedAt:
                    new Date().toISOString()
            }
        );

        return UserRepository.save(
            user
        );

    }    getById(id) {

        return UserRepository.findById(
            id
        );

    }

    getByUsername(
        username
    ) {

        return UserRepository.findByUsername(
            username
        );

    }

    getByEmail(
        email
    ) {

        return UserRepository.findByEmail(
            email
        );

    }

    getByTenant(
        tenantId
    ) {

        return UserRepository.findByTenant(
            tenantId
        );

    }

    getAll() {

        return UserRepository.findAll();

    }

    remove(id) {

        return UserRepository.delete(
            id
        );

    }

    exists(id) {

        return UserRepository.exists(
            id
        );

    }

    count() {

        return UserRepository.count();

    }

}

module.exports =
    new UserService();
