/**
 * Ravason Enterprise
 * Billing Foundation
 *
 * Invoice data model definition.
 *
 * Responsible for invoice structure only.
 * No storage or business logic belongs here.
 */

class InvoiceModel {

    constructor(data = {}) {

        this.id = data.id || null;

        this.tenantId = data.tenantId || null;

        this.customerId = data.customerId || null;

        this.subscriptionId = data.subscriptionId || null;

        this.invoiceNumber = data.invoiceNumber || null;

        this.status = data.status || "draft";

        this.currency = data.currency || null;

        this.items = Array.isArray(data.items)
            ? data.items
            : [];

        this.subtotal = data.subtotal || 0;

        this.taxAmount = data.taxAmount || 0;

        this.discountAmount = data.discountAmount || 0;

        this.totalAmount = data.totalAmount || 0;

        this.issueDate = data.issueDate || null;

        this.dueDate = data.dueDate || null;

        this.paidDate = data.paidDate || null;

        this.metadata = data.metadata || {};

        this.createdAt = data.createdAt || new Date().toISOString();

        this.updatedAt = data.updatedAt || new Date().toISOString();
    }


    update(data = {}) {

        Object.assign(this, data);

        this.updatedAt = new Date().toISOString();

        return this;
    }


    toJSON() {

        return {
            id: this.id,
            tenantId: this.tenantId,
            customerId: this.customerId,
            subscriptionId: this.subscriptionId,
            invoiceNumber: this.invoiceNumber,
            status: this.status,
            currency: this.currency,
            items: this.items,
            subtotal: this.subtotal,
            taxAmount: this.taxAmount,
            discountAmount: this.discountAmount,
            totalAmount: this.totalAmount,
            issueDate: this.issueDate,
            dueDate: this.dueDate,
            paidDate: this.paidDate,
            metadata: this.metadata,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

}


module.exports = InvoiceModel;
