/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * TaxService.js
 */

class TaxService {

    validateRate(rate) {

        const value = Number(rate);

        if (Number.isNaN(value)) {

            throw new Error(
                "Tax rate must be numeric."
            );

        }

        if (value < 0) {

            throw new Error(
                "Tax rate cannot be negative."
            );

        }

        return value;

    }

    calculateTax(
        amount,
        rate
    ) {

        const taxableAmount =
            Number(amount) || 0;

        const taxRate =
            this.validateRate(rate);

        return Number(
            (
                taxableAmount *
                (taxRate / 100)
            ).toFixed(2)
        );

    }

    calculateInclusiveTax(
        totalAmount,
        rate
    ) {

        const total =
            Number(totalAmount) || 0;

        const taxRate =
            this.validateRate(rate);

        if (taxRate === 0) {

            return 0;

        }

        return Number(
            (
                total -
                (
                    total /
                    (1 + (taxRate / 100))
                )
            ).toFixed(2)
        );

    }

    calculateExclusiveTotal(
        amount,
        rate
    ) {

        return Number(
            (
                Number(amount) +
                this.calculateTax(
                    amount,
                    rate
                )
            ).toFixed(2)
        );

    }

}

module.exports =
    new TaxService();
