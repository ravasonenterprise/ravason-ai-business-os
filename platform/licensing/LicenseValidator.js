const RavasonLicenseValidator = {

    validate(
        license
    ) {

        if (
            !RavasonLicenseModel.validate(
                license
            )
        ) {

            return {

                valid: false,

                result:
                    RavasonLicenseConstants
                        .VALIDATION_RESULT
                        .INVALID,

                message:
                    "Invalid license structure."

            };

        }


        if (

            license.status ===

            RavasonLicenseConstants
                .LICENSE_STATUS
                .REVOKED

        ) {

            return {

                valid: false,

                result:
                    RavasonLicenseConstants
                        .VALIDATION_RESULT
                        .INVALID,

                message:
                    "License has been revoked."

            };

        }


        if (

            license.expiresAt &&

            new Date(
                license.expiresAt
            ) < new Date()

        ) {

            return {

                valid: false,

                result:
                    RavasonLicenseConstants
                        .VALIDATION_RESULT
                        .INVALID,

                message:
                    "License has expired."

            };

        }


        return {

            valid: true,

            result:
                RavasonLicenseConstants
                    .VALIDATION_RESULT
                    .VALID,

            message:
                "License is valid."

        };

    },


    isActive(
        license
    ) {

        return (

            this.validate(
                license
            ).valid &&

            license.status ===

            RavasonLicenseConstants
                .LICENSE_STATUS
                .ACTIVE

        );

    }

};

window.RavasonLicenseValidator =
    RavasonLicenseValidator;
