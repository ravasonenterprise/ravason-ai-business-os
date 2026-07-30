/**
 * Ravason Enterprise
 * Billing Foundation
 *
 * Defines shared billing constants.
 *
 * Responsibilities:
 * - Billing status definitions
 * - Invoice states
 * - Payment states
 * - Billing cycle definitions
 * - Transaction types
 *
 * This file contains only constants.
 * No business logic belongs here.
 */

const BillingConstants = Object.freeze({

    /**
     * Invoice lifecycle states
     */
    INVOICE_STATUS: Object.freeze({
        DRAFT: "draft",
        ISSUED: "issued",
        SENT: "sent",
        PAID: "paid",
        PARTIALLY_PAID: "partially_paid",
        OVERDUE: "overdue",
        CANCELLED: "cancelled",
        VOID: "void"
    }),


    /**
     * Payment lifecycle states
     */
    PAYMENT_STATUS: Object.freeze({
        PENDING: "pending",
        PROCESSING: "processing",
        COMPLETED: "completed",
        FAILED: "failed",
        REFUNDED: "refunded",
        CANCELLED: "cancelled"
    }),


    /**
     * Billing cycle definitions
     */
    BILLING_CYCLE: Object.freeze({
        MONTHLY: "monthly",
        QUARTERLY: "quarterly",
        BI_ANNUAL: "bi_annual",
        ANNUAL: "annual",
        CUSTOM: "custom"
    }),


    /**
     * Payment transaction types
     */
    TRANSACTION_TYPE: Object.freeze({
        CHARGE: "charge",
        REFUND: "refund",
        ADJUSTMENT: "adjustment",
        CREDIT: "credit",
        DEBIT: "debit"
    }),


    /**
     * Supported billing event types
     */
    BILLING_EVENT: Object.freeze({
        INVOICE_CREATED: "invoice_created",
        INVOICE_UPDATED: "invoice_updated",
        PAYMENT_RECEIVED: "payment_received",
        PAYMENT_FAILED: "payment_failed",
        RENEWAL_COMPLETED: "renewal_completed",
        RENEWAL_FAILED: "renewal_failed"
    })

});


module.exports = BillingConstants;
