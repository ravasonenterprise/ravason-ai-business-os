/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingLedgerService.js
 */

class BillingLedgerService {

    constructor() {

        this.entries = [];

    }

    record(entry = {}) {

        const ledgerEntry = {

            id:
                entry.id || null,

            tenantId:
                entry.tenantId || null,

            customerId:
                entry.customerId || null,

            invoiceId:
                entry.invoiceId || null,

            transactionId:
                entry.transactionId || null,

            type:
                entry.type || "UNKNOWN",

            amount:
                Number(entry.amount) || 0,

            currency:
                entry.currency || "USD",

            description:
                entry.description || "",

            metadata:
                entry.metadata || {},

            createdAt:
                entry.createdAt ||
                new Date().toISOString()

        };

        this.entries.push(ledgerEntry);

        return ledgerEntry;

    }

    all() {

        return [...this.entries];

    }

    byTenant(tenantId) {

        return this.entries.filter(
            entry =>
                entry.tenantId === tenantId
        );

    }

    byCustomer(customerId) {

        return this.entries.filter(
            entry =>
                entry.customerId === customerId
        );

    }

    byInvoice(invoiceId) {

        return this.entries.filter(
            entry =>
                entry.invoiceId === invoiceId
        );

    }

    balance(tenantId) {

        return this.byTenant(tenantId)
            .reduce(
                (total, entry) =>
                    total + entry.amount,
                0
            );

    }

    clear() {

        this.entries = [];

    }

}

module.exports =
    new BillingLedgerService();
