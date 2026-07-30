/**
 * Ravason Enterprise
 * Platform Subscription Foundation
 *
 * PlanVersionService.js
 */

class PlanVersionService {

    constructor() {

        this.versions = new Map();

    }

    register(planId, version) {

        if (!planId) {
            throw new Error(
                "Plan id is required."
            );
        }

        if (!version || !version.version) {
            throw new Error(
                "Version information is required."
            );
        }

        if (!this.versions.has(planId)) {
            this.versions.set(
                planId,
                []
            );
        }

        this.versions
            .get(planId)
            .push(
                Object.freeze({
                    ...version
                })
            );

        return version;

    }

    latest(planId) {

        const versions =
            this.versions.get(planId);

        if (
            !versions ||
            versions.length === 0
        ) {
            return null;
        }

        return versions[
            versions.length - 1
        ];

    }

    all(planId) {

        return (
            this.versions.get(planId) || []
        );

    }

    exists(planId, version) {

        return this.all(planId)
            .some(
                item =>
                    item.version === version
            );

    }

    count(planId) {

        return this.all(planId)
            .length;

    }

}

module.exports =
    new PlanVersionService();
