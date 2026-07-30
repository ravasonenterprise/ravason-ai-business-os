/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * RefundService.js
 */

const PaymentModel =
    require("./PaymentModel");

class RefundService {

    createRefund(refund = {}) {

        if (!refund.tenantId) {
            throw new Error("Tenant ID is required.");
        }

        if (!refund.paymentId) {
            throw new Error("Payment ID is required.");
        }

        const amount =
            Number(refund.amount);

        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Valid refund amount is required.");
        }

        return {

            id:
                refund.id ||
                Date.now().toString(),

            tenantId:
                refund.tenantId,

            paymentId:
                refund.paymentId,

            invoiceId:
                refund.invoiceId || null,

            amount,

            currency:
                refund.currency || "KES",

            reason:
                refund.reason || "",

            status:
                "PENDING",

            createdAt:
                new Date().toISOString()

        };

    }

    approve(refund) {

        refund.status = "APPROVED";
        refund.approvedAt =
            new Date().toISOString();

        return refund;

    }

    reject(refund, reason = "") {

        refund.status = "REJECTED";
        refund.rejectionReason = reason;
        refund.rejectedAt =
            new Date().toISOString();

        return refund;

    }

    complete(refund) {

        refund.status = "COMPLETED";
        refund.completedAt =
            new Date().toISOString();

        return refund;

    }

}

module.exports = new RefundService();
