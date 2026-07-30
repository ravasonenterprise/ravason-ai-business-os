/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * PaymentTransactionService.js
 */

const PaymentTransactionModel =
    require("./PaymentTransactionModel");

class PaymentTransactionService {

    constructor() {

        this.transactions = new Map();

    }

    create(data = {}) {

        const transaction =
            data instanceof PaymentTransactionModel
                ? data
                : new PaymentTransactionModel(data);

        if (!transaction.id) {
            throw new Error(
                "Transaction id is required."
            );
        }

        this.transactions.set(
            transaction.id,
            transaction
        );

        return transaction;

    }

    exists(id) {

        return this.transactions.has(id);

    }

    get(id) {

        return this.transactions.get(id) || null;

    }

    update(id, updates = {}) {

        const transaction =
            this.get(id);

        if (!transaction) {
            throw new Error(
                "Transaction not found."
            );
        }

        Object.assign(
            transaction,
            updates,
            {
                updatedAt:
                    new Date().toISOString()
            }
        );

        return transaction;

    }

    remove(id) {

        return this.transactions.delete(id);

    }

    list() {

        return Array.from(
            this.transactions.values()
        );

    }

    findByTenant(tenantId) {

        return this.list().filter(
            transaction =>
                transaction.tenantId === tenantId
        );

    }

    findByCustomer(customerId) {

        return this.list().filter(
            transaction =>
                transaction.customerId === customerId
        );

    }

    findByInvoice(invoiceId) {

        return this.list().filter(
            transaction =>
                transaction.invoiceId === invoiceId
        );

    }

    findByStatus(status) {

        return this.list().filter(
            transaction =>
                transaction.status === status
        );

    }

    clear() {

        this.transactions.clear();

    }

}

module.exports =
    new PaymentTransactionService();
