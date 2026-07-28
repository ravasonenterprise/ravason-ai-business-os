const RavasonPasswordPolicyService = {

    MIN_LENGTH:
        12,

    MAX_LENGTH:
        128,


    validate(password) {

        if (
            typeof password !== "string"
        ) {

            return {

                valid: false,

                message:
                    "Password must be a string."

            };

        }

        if (
            password.length <
            this.MIN_LENGTH
        ) {

            return {

                valid: false,

                message:
                    "Password is too short."

            };

        }

        if (
            password.length >
            this.MAX_LENGTH
        ) {

            return {

                valid: false,

                message:
                    "Password is too long."

            };

        }

        if (
            !/[A-Z]/.test(password)
        ) {

            return {

                valid: false,

                message:
                    "Password must contain an uppercase letter."

            };

        }

        if (
            !/[a-z]/.test(password)
        ) {

            return {

                valid: false,

                message:
                    "Password must contain a lowercase letter."

            };

        }

        if (
            !/[0-9]/.test(password)
        ) {

            return {

                valid: false,

                message:
                    "Password must contain a number."

            };

        }

        if (
            !/[^A-Za-z0-9]/.test(password)
        ) {

            return {

                valid: false,

                message:
                    "Password must contain a special character."

            };

        }

        return {

            valid: true,

            message:
                "Password meets policy."

        };

    }

};

window.RavasonPasswordPolicyService =
    RavasonPasswordPolicyService;
