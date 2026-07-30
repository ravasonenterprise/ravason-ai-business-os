/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingFacade.js
 */

const InvoiceService =
    require("./InvoiceService");

const PaymentService =
    require("./PaymentService");

const RefundService =
    require("./RefundService");

const CreditNoteService =
    require("./CreditNoteService");

const ReceiptService =
    require("./ReceiptService");

const BillingReportService =
    require("./BillingReportService");

const BillingAuditService =
    require("./BillingAuditService");

class BillingFacade {

    createInvoice(invoice) {

        const result =
            InvoiceService.create(invoice);

        BillingAuditService.log({

            tenantId: result.tenantId,

            type: "INVOICE_CREATED",

            entity: "Invoice",

            entityId: result.id

        });

        return result;

    }

    recordPayment(payment) {

        const result =
            PaymentService.create(payment);

        BillingAuditService.log({

            tenantId: result.tenantId,

            type: "PAYMENT_RECORDED",

            entity: "Payment",

            entityId: result.id

        });

        return result;

    }

    createRefund(refund) {

        return RefundService.createRefund(
            refund
        );

    }

    createCreditNote(data) {

        return CreditNoteService.create(
            data
        );

    }

    generateReceipt(payment) {

        return ReceiptService.generate(
            payment
        );

    }

    generateReport(data) {

        return BillingReportService
            .revenueSummary(data);

    }

}

module.exports =
    new BillingFacade();
