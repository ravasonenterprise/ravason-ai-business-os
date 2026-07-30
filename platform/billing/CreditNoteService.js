/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * CreditNoteService.js
 */

class CreditNoteService {

    create(data = {}) {

        if (!data.tenantId) {
            throw new Error("Tenant ID is required.");
        }

        if (!data.invoiceId) {
            throw new Error("Invoice ID is required.");
        }

        const amount =
            Number(data.amount);

        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Valid credit amount is required.");
        }

        return {

            id:
                data.id ||
                Date.now().toString(),

            tenantId:
                data.tenantId,

            invoiceId:
                data.invoiceId,

            customerId:
                data.customerId || null,

            amount,

            currency:
                data.currency || "KES",

            reason:
                data.reason || "",

            status:
                "ISSUED",

            issuedAt:
                new Date().toISOString(),

            appliedAt:
                null

        };

    }

    apply(creditNote) {

        creditNote.status =
            "APPLIED";

        creditNote.appliedAt =
            new Date().toISOString();

        return creditNote;

    }

    cancel(creditNote) {

        creditNote.status =
            "CANCELLED";

        creditNote.cancelledAt =
            new Date().toISOString();

        return creditNote;

    }

}

module.exports = new CreditNoteService();
