/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingValidationService.js
 */

class BillingValidationService {

    validateTenant(tenantId) {

        if (!tenantId) {
            throw new Error(
                "Tenant ID is required."
            );
        }

        return true;

    }

    validateCustomer(customerId) {

        if (!customerId) {
            throw new Error(
                "Customer ID is required."
            );
        }

        return true;

    }

    validateCurrency(currency) {

        if (
            !currency ||
            typeof currency !== "string"
        ) {
            throw new Error(
                "A valid currency is required."
            );
        }

        return true;

    }

    validateAmount(amount) {

        if (
            typeof amount !== "number" ||
            Number.isNaN(amount)
        ) {
            throw new Error(
                "Amount must be numeric."
            );
        }

        if (amount < 0) {
            throw new Error(
                "Amount cannot be negative."
            );
        }

        return true;

    }

    validateInvoice(invoice) {

        if (!invoice) {
            throw new Error(
                "Invoice is required."
            );
        }

        this.validateTenant(
            invoice.tenantId
        );

        this.validateCustomer(
            invoice.customerId
        );

        this.validateAmount(
            Number(invoice.total || 0)
        );

        return true;

    }

    validatePayment(payment) {

        if (!payment) {
            throw new Error(
                "Payment is required."
            );
        }

        this.validateTenant(
            payment.tenantId
        );

        this.validateCustomer(
            payment.customerId
        );

        this.validateAmount(
            Number(payment.amount || 0)
        );

        this.validateCurrency(
            payment.currency
        );

        return true;

    }

    validateRefund(refund) {

        if (!refund) {
            throw new Error(
                "Refund is required."
            );
        }

        this.validateTenant(
            refund.tenantId
        );

        this.validateAmount(
            Number(refund.amount || 0)
        );

        return true;

    }

}

module.exports =
    new BillingValidationService();
