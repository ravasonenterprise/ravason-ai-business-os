/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * PaymentModel.js
 */

const BillingConstants =
    require("./BillingConstants");

class PaymentModel {

    constructor(data = {}) {

        this.id =
            data.id || null;

        this.tenantId =
            data.tenantId || null;

        this.customerId =
            data.customerId || null;

        this.subscriptionId =
            data.subscriptionId || null;

        this.invoiceId =
            data.invoiceId || null;

        this.paymentReference =
            data.paymentReference || null;

        this.externalReference =
            data.externalReference || null;

        this.method =
            data.method ||
            BillingConstants.PAYMENT_METHODS.UNKNOWN;

        this.status =
            data.status ||
            BillingConstants.PAYMENT_STATUS.PENDING;

        this.currency =
            data.currency ||
            BillingConstants.DEFAULT_CURRENCY;

        this.amount =
            Number(data.amount) || 0;

        this.provider =
            data.provider || null;

        this.notes =
            data.notes || "";

        this.metadata =
            data.metadata || {};

        this.createdAt =
            data.createdAt ||
            new Date().toISOString();

        this.updatedAt =
            data.updatedAt ||
            new Date().toISOString();

        this.completedAt =
            data.completedAt || null;

    }

    toJSON() {

        return {

            id: this.id,
            tenantId: this.tenantId,
            customerId: this.customerId,
            subscriptionId: this.subscriptionId,
            invoiceId: this.invoiceId,
            paymentReference: this.paymentReference,
            externalReference: this.externalReference,
            method: this.method,
            status: this.status,
            currency: this.currency,
            amount: this.amount,
            provider: this.provider,
            notes: this.notes,
            metadata: this.metadata,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            completedAt: this.completedAt

        };

    }

}

module.exports = PaymentModel;
