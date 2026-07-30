/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingValidator.js
 */

class BillingValidator {

    requireTenantId(tenantId) {

        if (!tenantId) {
            throw new Error("Tenant ID is required.");
        }

    }

    requireCustomerId(customerId) {

        if (!customerId) {
            throw new Error("Customer ID is required.");
        }

    }

    requireInvoiceId(invoiceId) {

        if (!invoiceId) {
            throw new Error("Invoice ID is required.");
        }

    }

    requirePaymentId(paymentId) {

        if (!paymentId) {
            throw new Error("Payment ID is required.");
        }

    }

    requireCurrency(currency) {

        if (!currency) {
            throw new Error("Currency is required.");
        }

    }

    requirePositiveAmount(amount) {

        const value = Number(amount);

        if (!Number.isFinite(value) || value <= 0) {
            throw new Error(
                "Amount must be greater than zero."
            );
        }

        return value;

    }

    requireObject(value, name) {

        if (
            value === null ||
            typeof value !== "object"
        ) {
            throw new Error(
                name + " must be an object."
            );
        }

    }

}

module.exports =
    new BillingValidator();
