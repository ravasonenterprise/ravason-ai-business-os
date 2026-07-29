const RavasonLicenseKeyGenerator = {

    PREFIX:
        "RAV",


    randomSegment(
        length = 5
    ) {

        const characters =
            "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

        let result =
            "";

        for (
            let i = 0;
            i < length;
            i++
        ) {

            result +=
                characters.charAt(

                    Math.floor(

                        Math.random() *
                        characters.length

                    )

                );

        }

        return result;

    },


    dateSegment() {

        const now =
            new Date();

        const year =
            now.getFullYear()
                .toString()
                .slice(-2);

        const month =
            String(
                now.getMonth() + 1
            ).padStart(
                2,
                "0"
            );

        const day =
            String(
                now.getDate()
            ).padStart(
                2,
                "0"
            );

        return (
            year +
            month +
            day
        );

    },


    generate(
        licenseType =
            RavasonLicenseConstants
                .LICENSE_TYPES
                .SUBSCRIPTION
    ) {

        const typeCode = {

            trial:
                "TRL",

            subscription:
                "SUB",

            enterprise:
                "ENT",

            offline:
                "OFF"

        }[licenseType] || "GEN";


        return [

            this.PREFIX,

            typeCode,

            this.dateSegment(),

            this.randomSegment(),

            this.randomSegment()

        ].join("-");

    }

};


window.RavasonLicenseKeyGenerator =
    RavasonLicenseKeyGenerator;
