/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * PaymentTransactionModel.js
 */

const BillingConstants =
    require("./BillingConstants");

class PaymentTransactionModel {

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

        this.provider =
            data.provider || null;

        this.gateway =
            data.gateway || null;

        this.transactionReference =
            data.transactionReference || null;

        this.externalReference =
            data.externalReference || null;

        this.currency =
            data.currency ||
            BillingConstants.DEFAULT_CURRENCY;

        this.amount =
            Number(data.amount) || 0;

        this.fee =
            Number(data.fee) || 0;

        this.tax =
            Number(data.tax) || 0;

        this.netAmount =
            Number(data.netAmount) || 0;

        this.status =
            data.status ||
            BillingConstants.PAYMENT_STATUS.PENDING;

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
            provider: this.provider,
            gateway: this.gateway,
            transactionReference:
                this.transactionReference,
            externalReference:
                this.externalReference,
            currency: this.currency,
            amount: this.amount,
            fee: this.fee,
            tax: this.tax,
            netAmount: this.netAmount,
            status: this.status,
            metadata: this.metadata,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            completedAt: this.completedAt

        };

    }

}

module.exports =
    PaymentTransactionModel;
