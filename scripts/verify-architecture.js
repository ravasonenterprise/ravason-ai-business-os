
// Ravason Enterprise
// Architecture Boundary Verifier

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();

const RULES = [
    {
        directory: "platform/subscriptions",
        forbiddenWords: [
            "InvoiceModel",
            "InvoiceService",
            "PaymentModel",
            "PaymentService",
            "ReceiptService",
            "TaxService",
            "DiscountService",
            "CurrencyService"
        ]
    },
    {
        directory: "platform/billing",
        forbiddenWords: [
            "PlanDefinitionService",
            "SubscriptionPlanService",
            "EntitlementService",
            "SubscriptionFeatureService",
            "SubscriptionAccessGuardService"
        ]
    }
];


function walk(dir) {

    let files = [];

    if (!fs.existsSync(dir)) {
        return files;
    }

    for (const item of fs.readdirSync(dir)) {

        const fullPath = path.join(dir, item);

        if (fs.statSync(fullPath).isDirectory()) {
            files.push(...walk(fullPath));
        }
        else if (item.endsWith(".js")) {
            files.push(fullPath);
        }
    }

    return files;
}


let violations = [];


for (const rule of RULES) {

    const directory =
        path.join(ROOT, rule.directory);

    const files = walk(directory);


    for (const file of files) {

        const content =
            fs.readFileSync(file, "utf8");


        for (const forbidden of rule.forbiddenWords) {

            if (content.includes(forbidden)) {

                violations.push({
                    file,
                    dependency: forbidden
                });

            }
        }
    }
}


if (violations.length > 0) {

    console.error(
        "Architecture boundary violations found:"
    );


    for (const violation of violations) {

        console.error(
            `${violation.file} -> ${violation.dependency}`
        );

    }

    process.exit(1);
}


console.log(
    "✓ Billing and Subscription boundaries verified."
);
