/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseSchedulerService.js
 */

class LicenseSchedulerService {

    constructor() {

        this.jobs =
            new Map();

    }

    register(
        name,
        callback,
        interval
    ) {

        if (!name) {
            throw new Error(
                "Job name is required."
            );
        }

        if (
            typeof callback !==
            "function"
        ) {
            throw new Error(
                "Job callback must be a function."
            );
        }

        this.jobs.set(
            name,
            {

                callback,

                interval,

                enabled: true,

                lastRunAt: null

            }
        );

        return this.jobs.get(name);

    }

    run(name) {

        const job =
            this.jobs.get(name);

        if (!job) {
            throw new Error(
                "Unknown scheduled job."
            );
        }

        if (!job.enabled) {
            return false;
        }

        job.callback();

        job.lastRunAt =
            new Date().toISOString();

        return true;

    }

    enable(name) {

        const job =
            this.jobs.get(name);

        if (job) {
            job.enabled = true;
        }

    }

    disable(name) {

        const job =
            this.jobs.get(name);

        if (job) {
            job.enabled = false;
        }

    }

    remove(name) {

        return this.jobs.delete(
            name
        );

    }

    list() {

        return Array.from(
            this.jobs.entries()
        ).map(
            ([name, job]) => ({

                name,

                interval:
                    job.interval,

                enabled:
                    job.enabled,

                lastRunAt:
                    job.lastRunAt

            })
        );

    }

}

module.exports =
    new LicenseSchedulerService();
