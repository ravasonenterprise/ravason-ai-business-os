/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * ReceiptService.js
 */

class ReceiptService {

    create(payment) {

        if (!payment) {

            throw new Error(
                "Payment is required."
            );

        }

        if (!payment.tenantId) {

            throw new Error(
                "tenantId is required."
            );

        }

        if (!payment.invoiceId) {

            throw new Error(
                "invoiceId is required."
            );

        }

        if (!payment.amount) {

            throw new Error(
                "Payment amount is required."
            );

        }

        return {

            receiptNumber:
                this.generateReceiptNumber(),

            tenantId:
                payment.tenantId,

            customerId:
                payment.customerId,

            invoiceId:
                payment.invoiceId,

            paymentReference:
                payment.paymentReference,

            currency:
                payment.currency,

            amount:
                payment.amount,

            issuedAt:
                new Date().toISOString()

        };

    }

    generateReceiptNumber() {

        return (
            "RCT-" +
            Date.now() +
            "-" +
            Math.floor(
                Math.random() * 10000
            )
        );

    }

    reissue(receipt) {

        return {

            ...receipt,

            reissuedAt:
                new Date().toISOString()

        };

    }

}

module.exports =
    new ReceiptService();
