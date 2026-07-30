/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * PaymentGatewayService.js
 */

class PaymentGatewayService {

    constructor() {

        this.gateways = new Map();

    }

    register(name, gateway) {

        if (!name) {
            throw new Error("Gateway name is required.");
        }

        if (!gateway) {
            throw new Error("Gateway implementation is required.");
        }

        this.gateways.set(name, gateway);

    }

    get(name) {

        if (!this.gateways.has(name)) {
            throw new Error(
                "Payment gateway not registered: " + name
            );
        }

        return this.gateways.get(name);

    }

    process(name, payment) {

        const gateway =
            this.get(name);

        if (
            typeof gateway.process !== "function"
        ) {
            throw new Error(
                "Gateway does not implement process()."
            );
        }

        return gateway.process(payment);

    }

    refund(name, refund) {

        const gateway =
            this.get(name);

        if (
            typeof gateway.refund !== "function"
        ) {
            throw new Error(
                "Gateway does not implement refund()."
            );
        }

        return gateway.refund(refund);

    }

    verify(name, reference) {

        const gateway =
            this.get(name);

        if (
            typeof gateway.verify !== "function"
        ) {
            throw new Error(
                "Gateway does not implement verify()."
            );
        }

        return gateway.verify(reference);

    }

    list() {

        return Array.from(
            this.gateways.keys()
        );

    }

}

module.exports =
    new PaymentGatewayService();
