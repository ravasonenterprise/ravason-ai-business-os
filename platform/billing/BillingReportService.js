/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingReportService.js
 */

class BillingReportService {

    invoiceSummary(invoices = []) {

        return {

            totalInvoices:
                invoices.length,

            totalAmount:
                invoices.reduce(
                    (sum, invoice) =>
                        sum +
                        (Number(invoice.totalAmount) || 0),
                    0
                )

        };

    }

    paymentSummary(payments = []) {

        return {

            totalPayments:
                payments.length,

            totalCollected:
                payments.reduce(
                    (sum, payment) =>
                        sum +
                        (Number(payment.amount) || 0),
                    0
                )

        };

    }

    refundSummary(refunds = []) {

        return {

            totalRefunds:
                refunds.length,

            totalRefundAmount:
                refunds.reduce(
                    (sum, refund) =>
                        sum +
                        (Number(refund.amount) || 0),
                    0
                )

        };

    }

    revenueSummary(data = {}) {

        return {

            invoices:
                this.invoiceSummary(
                    data.invoices || []
                ),

            payments:
                this.paymentSummary(
                    data.payments || []
                ),

            refunds:
                this.refundSummary(
                    data.refunds || []
                )

        };

    }

}

module.exports =
    new BillingReportService();
