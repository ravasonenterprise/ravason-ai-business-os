/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingRepository.js
 */

class BillingRepository {

    constructor() {

        this.store = new Map();

    }

    save(collection, entity) {

        if (!collection) {
            throw new Error("Collection is required.");
        }

        if (!entity || !entity.id) {
            throw new Error(
                "Entity with a valid ID is required."
            );
        }

        if (!this.store.has(collection)) {
            this.store.set(
                collection,
                new Map()
            );
        }

        this.store
            .get(collection)
            .set(entity.id, entity);

        return entity;

    }

    findById(collection, id) {

        if (!this.store.has(collection)) {
            return null;
        }

        return (
            this.store
                .get(collection)
                .get(id) || null
        );

    }

    findAll(collection) {

        if (!this.store.has(collection)) {
            return [];
        }

        return Array.from(
            this.store
                .get(collection)
                .values()
        );

    }

    delete(collection, id) {

        if (!this.store.has(collection)) {
            return false;
        }

        return this.store
            .get(collection)
            .delete(id);

    }

    clear(collection) {

        if (!this.store.has(collection)) {
            return;
        }

        this.store
            .get(collection)
            .clear();

    }

}

module.exports =
    new BillingRepository();
