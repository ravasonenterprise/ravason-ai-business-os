/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseSyncService.js
 */

class LicenseSyncService {

    sync(license) {

        if (!license) {
            throw new Error(
                "License is required."
            );
        }

        license.lastSyncedAt =
            new Date().toISOString();

        return license;

    }

    syncAll(licenses = []) {

        return licenses.map(
            license => this.sync(license)
        );

    }

    needsSync(license) {

        if (!license) {
            return false;
        }

        return !license.lastSyncedAt;

    }

    markPending(license) {

        if (!license) {
            throw new Error(
                "License is required."
            );
        }

        license.syncPending = true;

        return license;

    }

    clearPending(license) {

        if (!license) {
            throw new Error(
                "License is required."
            );
        }

        license.syncPending = false;

        return license;

    }

}

module.exports =
    new LicenseSyncService();
