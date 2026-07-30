/**
 * Ravason Enterprise
 * Billing Foundation
 *
 * Invoice management service.
 *
 * Responsibilities:
 * - Create invoices
 * - Update invoices
 * - Manage invoice status
 * - Calculate invoice totals
 *
 * Storage integration will be connected through
 * the platform storage layer later.
 */

const InvoiceModel = require("./InvoiceModel");

const BillingConstants = require("./BillingConstants");


class InvoiceService {


    createInvoice(data = {}) {

        const invoice = new InvoiceModel(data);

        invoice.status =
            BillingConstants.INVOICE_STATUS.DRAFT;

        return invoice;
    }


    updateInvoice(invoice, updates = {}) {

        if (!invoice) {
            throw new Error("Invoice is required");
        }

        return invoice.update(updates);
    }


    issueInvoice(invoice) {

        if (!invoice) {
            throw new Error("Invoice is required");
        }

        invoice.status =
            BillingConstants.INVOICE_STATUS.ISSUED;

        invoice.updatedAt =
            new Date().toISOString();

        return invoice;
    }


    markPaid(invoice) {

        if (!invoice) {
            throw new Error("Invoice is required");
        }

        invoice.status =
            BillingConstants.INVOICE_STATUS.PAID;

        invoice.paidDate =
            new Date().toISOString();

        invoice.updatedAt =
            new Date().toISOString();

        return invoice;
    }


    calculateTotal(invoice) {

        if (!invoice) {
            throw new Error("Invoice is required");
        }

        const subtotal =
            Number(invoice.subtotal) || 0;

        const tax =
            Number(invoice.taxAmount) || 0;

        const discount =
            Number(invoice.discountAmount) || 0;


        invoice.totalAmount =
            subtotal + tax - discount;


        return invoice.totalAmount;
    }


}


module.exports = new InvoiceService();
