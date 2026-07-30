/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingSchedulerService.js
 */

class BillingSchedulerService {

    constructor() {

        this.jobs = new Map();

    }

    register(job) {

        if (!job || !job.id) {
            throw new Error(
                "Job id is required."
            );
        }

        this.jobs.set(
            job.id,
            {
                id: job.id,
                name:
                    job.name || job.id,
                schedule:
                    job.schedule || null,
                enabled:
                    job.enabled !== false,
                handler:
                    job.handler || null,
                lastRun:
                    null,
                nextRun:
                    job.nextRun || null,
                metadata:
                    job.metadata || {}
            }
        );

        return this.jobs.get(job.id);

    }

    get(jobId) {

        return this.jobs.get(jobId) || null;

    }

    list() {

        return Array.from(
            this.jobs.values()
        );

    }

    enable(jobId) {

        const job =
            this.get(jobId);

        if (!job) {
            throw new Error(
                "Job not found."
            );
        }

        job.enabled = true;

        return job;

    }

    disable(jobId) {

        const job =
            this.get(jobId);

        if (!job) {
            throw new Error(
                "Job not found."
            );
        }

        job.enabled = false;

        return job;

    }

    run(jobId) {

        const job =
            this.get(jobId);

        if (!job) {
            throw new Error(
                "Job not found."
            );
        }

        if (!job.enabled) {
            throw new Error(
                "Job is disabled."
            );
        }

        if (
            typeof job.handler ===
            "function"
        ) {

            job.handler();

        }

        job.lastRun =
            new Date().toISOString();

        return job;

    }

    remove(jobId) {

        return this.jobs.delete(jobId);

    }

    clear() {

        this.jobs.clear();

    }

}

module.exports =
    new BillingSchedulerService();
