/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * PaymentProviderAdapter.js
 */

class PaymentProviderAdapter {

    initialize(configuration) {
        throw new Error(
            "initialize() must be implemented."
        );
    }

    createPayment(payment) {
        throw new Error(
            "createPayment() must be implemented."
        );
    }

    verifyPayment(reference) {
        throw new Error(
            "verifyPayment() must be implemented."
        );
    }

    refundPayment(refund) {
        throw new Error(
            "refundPayment() must be implemented."
        );
    }

    cancelPayment(reference) {
        throw new Error(
            "cancelPayment() must be implemented."
        );
    }

    getTransaction(reference) {
        throw new Error(
            "getTransaction() must be implemented."
        );
    }

}

module.exports =
    PaymentProviderAdapter;
