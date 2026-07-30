/**
 * Ravason Enterprise
 * Platform Billing Foundation
 *
 * BillingExportService.js
 */

class BillingExportService {

    exportJSON(data = []) {

        return JSON.stringify(
            data,
            null,
            4
        );

    }

    exportCSV(data = []) {

        if (!Array.isArray(data)) {
            throw new Error(
                "Data must be an array."
            );
        }

        if (data.length === 0) {
            return "";
        }

        const headers =
            Object.keys(data[0]);

        const rows = data.map(
            item =>
                headers.map(
                    key =>
                        JSON.stringify(
                            item[key] ?? ""
                        )
                ).join(",")
        );

        return [
            headers.join(","),
            ...rows
        ].join("\n");

    }

    exportReport(
        type,
        data = []
    ) {

        switch (type) {

            case "json":
                return this.exportJSON(data);

            case "csv":
                return this.exportCSV(data);

            default:
                throw new Error(
                    "Unsupported export type: " +
                    type
                );

        }

    }

    supportedFormats() {

        return [
            "json",
            "csv"
        ];

    }

}

module.exports =
    new BillingExportService();
