/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * DiscountService.js
 */

class DiscountService {

    validateDiscount(value, type = "PERCENTAGE") {

        const amount = Number(value);

        if (Number.isNaN(amount) || amount < 0) {

            throw new Error(
                "Discount must be a non-negative number."
            );

        }

        if (
            type === "PERCENTAGE" &&
            amount > 100
        ) {

            throw new Error(
                "Percentage discount cannot exceed 100."
            );

        }

        return amount;

    }

    calculateDiscount(
        amount,
        discount,
        type = "PERCENTAGE"
    ) {

        const subtotal =
            Number(amount) || 0;

        const value =
            this.validateDiscount(
                discount,
                type
            );

        if (type === "FIXED") {

            return Math.min(
                subtotal,
                value
            );

        }

        return Number(
            (
                subtotal *
                (value / 100)
            ).toFixed(2)
        );

    }

    applyDiscount(
        amount,
        discount,
        type = "PERCENTAGE"
    ) {

        const subtotal =
            Number(amount) || 0;

        const reduction =
            this.calculateDiscount(
                subtotal,
                discount,
                type
            );

        return Number(
            (
                subtotal - reduction
            ).toFixed(2)
        );

    }

}

module.exports =
    new DiscountService();
