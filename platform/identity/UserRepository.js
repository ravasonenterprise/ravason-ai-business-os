

/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * UserRepository.js
 */

const UserModel =
    require("./UserModel");

class UserRepository {

    constructor() {

        this.storage =
            new Map();

    }

    save(user) {

        const model =
            user instanceof UserModel
                ? user
                : new UserModel(user);

        if (!model.id) {

            throw new Error(
                "User id is required."
            );

        }

        this.storage.set(
            model.id,
            model
        );

        return model;

    }

    findById(id) {

        return (
            this.storage.get(id) ||
            null
        );

    }

    findByUsername(username) {

        for (
            const user of
            this.storage.values()
        ) {

            if (
                user.username === username
            ) {

                return user;

            }

        }

        return null;

    }

    findByEmail(email) {

        for (
            const user of
            this.storage.values()
        ) {

            if (
                user.email === email
            ) {

                return user;

            }

        }

        return null;

    }    findByTenant(
        tenantId
    ) {

        return Array.from(
            this.storage.values()
        ).filter(
            user =>
                user.tenantId ===
                tenantId
        );

    }

    findAll() {

        return Array.from(
            this.storage.values()
        );

    }

    delete(id) {

        return this.storage.delete(
            id
        );

    }

    exists(id) {

        return this.storage.has(
            id
        );

    }

    count() {

        return this.storage.size;

    }

    clear() {

        this.storage.clear();

    }

}

module.exports =
    new UserRepository();
