/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * PaymentService.js
 */

const PaymentModel =
    require("./PaymentModel");

class PaymentService {

    create(data = {}) {

        return new PaymentModel(data);

    }

    validate(payment) {

        if (!(payment instanceof PaymentModel)) {

            throw new Error(
                "PaymentModel instance is required."
            );

        }

        if (!payment.tenantId) {

            throw new Error(
                "tenantId is required."
            );

        }

        if (!payment.customerId) {

            throw new Error(
                "customerId is required."
            );

        }

        if (!payment.amount ||
            payment.amount <= 0) {

            throw new Error(
                "Payment amount must be greater than zero."
            );

        }

        if (!payment.currency) {

            throw new Error(
                "Currency is required."
            );

        }

        return true;

    }

    authorize(payment) {

        this.validate(payment);

        payment.status = "AUTHORIZED";

        payment.updatedAt =
            new Date().toISOString();

        return payment;

    }

    capture(payment) {

        this.validate(payment);

        payment.status = "COMPLETED";

        payment.completedAt =
            new Date().toISOString();

        payment.updatedAt =
            payment.completedAt;

        return payment;

    }

    fail(payment, reason = "") {

        this.validate(payment);

        payment.status = "FAILED";

        payment.failureReason =
            reason;

        payment.updatedAt =
            new Date().toISOString();

        return payment;

    }

    refund(payment, amount = null) {

        this.validate(payment);

        payment.status =
            "REFUNDED";

        payment.refundedAmount =
            amount === null
                ? payment.amount
                : Number(amount);

        payment.updatedAt =
            new Date().toISOString();

        return payment;

    }

    cancel(payment) {

        this.validate(payment);

        payment.status =
            "CANCELLED";

        payment.updatedAt =
            new Date().toISOString();

        return payment;

    }

}

module.exports =
    new PaymentService();
