/**
 * Ravason Enterprise
 * Platform Core
 * Architecture Compliance Engine
 *
 * ArchitectureRules.js
 *
 * Central architecture constitution.
 * All verifiers must consume these rules.
 */

const ArchitectureRules = Object.freeze({

    DEPENDENCIES: Object.freeze({

        "platform/subscriptions": Object.freeze({
            allowed: [
                "platform/identity",
                "platform/tenant",
                "platform/configuration"
            ],
            forbidden: [
                "platform/billing",
                "platform/payments"
            ]
        }),

        "platform/billing": Object.freeze({
            allowed: [
                "platform/subscriptions",
                "platform/licensing",
                "platform/storage"
            ],
            forbidden: [
                "platform/products"
            ]
        })

    }),

    
    SCAN: Object.freeze({

        EXCLUDED_PATHS: Object.freeze([

            "platform/core/architecture",
            "scripts",
            "docs",
            "tests"

        ])

    }),

    RESPONSIBILITIES: Object.freeze({


        SubscriptionBillingService: Object.freeze([
            "subscription_pricing",
            "plan_charges",
            "renewal_amount"
        ]),

        InvoiceService: Object.freeze([
            "invoice_creation",
            "invoice_lifecycle"
        ]),

        PaymentService: Object.freeze([
            "payment_processing",
            "payment_status"
        ]),

        ReceiptService: Object.freeze([
            "receipt_generation"
        ])

    })

});

module.exports = ArchitectureRules;
