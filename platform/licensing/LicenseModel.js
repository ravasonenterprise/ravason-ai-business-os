/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicenseModel.js
 */

const LicenseConstants =
    require("./LicenseConstants");

class LicenseModel {

    constructor(data = {}) {

        this.id =
            data.id || null;

        this.tenantId =
            data.tenantId || null;

        this.productId =
            data.productId || null;

        this.subscriptionId =
            data.subscriptionId || null;

        this.licenseType =
            data.licenseType ||
            LicenseConstants.LICENSE_TYPES.SUBSCRIPTION;

        this.status =
            data.status ||
            LicenseConstants.STATUS.PENDING;

        this.maxDevices =
            Number(
                data.maxDevices ||
                LicenseConstants.DEFAULT_MAX_DEVICES
            );

        this.activatedDevices =
            data.activatedDevices || [];

        this.issuedAt =
            data.issuedAt ||
            new Date().toISOString();

        this.expiresAt =
            data.expiresAt || null;

        this.metadata =
            data.metadata || {};

        this.createdAt =
            data.createdAt ||
            new Date().toISOString();

        this.updatedAt =
            data.updatedAt ||
            new Date().toISOString();

    }

    toJSON() {

        return {

            id: this.id,
            tenantId: this.tenantId,
            productId: this.productId,
            subscriptionId: this.subscriptionId,
            licenseType: this.licenseType,
            status: this.status,
            maxDevices: this.maxDevices,
            activatedDevices: this.activatedDevices,
            issuedAt: this.issuedAt,
            expiresAt: this.expiresAt,
            metadata: this.metadata,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt

        };

    }

}

module.exports =
    LicenseModel;
