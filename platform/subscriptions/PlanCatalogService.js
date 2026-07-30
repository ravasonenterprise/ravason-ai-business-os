/**
 * Ravason Enterprise
 * Platform Subscription Foundation
 *
 * PlanCatalogService.js
 */

class PlanCatalogService {

    constructor() {

        this.plans = new Map();

    }

    register(plan) {

        if (!plan || !plan.id) {
            throw new Error(
                "A valid plan with an id is required."
            );
        }

        this.plans.set(
            plan.id,
            Object.freeze({
                ...plan
            })
        );

        return this.plans.get(plan.id);

    }

    get(planId) {

        return this.plans.get(planId) || null;

    }

    exists(planId) {

        return this.plans.has(planId);

    }

    list() {

        return Array.from(
            this.plans.values()
        );

    }

    remove(planId) {

        return this.plans.delete(planId);

    }

    clear() {

        this.plans.clear();

    }

    count() {

        return this.plans.size;

    }

}

module.exports =
    new PlanCatalogService();
