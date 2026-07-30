/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * CurrencyService.js
 */

const BillingConstants =
    require("./BillingConstants");

class CurrencyService {

    getDefaultCurrency() {

        return BillingConstants.DEFAULT_CURRENCY;

    }

    normalize(code) {

        if (!code) {

            return this.getDefaultCurrency();

        }

        return String(code)
            .trim()
            .toUpperCase();

    }

    validate(code) {

        const currency =
            this.normalize(code);

        if (currency.length !== 3) {

            throw new Error(
                "Currency code must be a 3-letter ISO code."
            );

        }

        return currency;

    }

    round(amount) {

        return Number(
            (Number(amount) || 0)
                .toFixed(2)
        );

    }

    format(amount, currency) {

        const value =
            this.round(amount);

        return {

            currency:
                this.validate(currency),

            amount: value

        };

    }

    convert(
        amount,
        exchangeRate
    ) {

        const value =
            Number(amount) || 0;

        const rate =
            Number(exchangeRate);

        if (
            Number.isNaN(rate) ||
            rate <= 0
        ) {

            throw new Error(
                "Valid exchange rate is required."
            );

        }

        return this.round(
            value * rate
        );

    }

}

module.exports =
    new CurrencyService();
