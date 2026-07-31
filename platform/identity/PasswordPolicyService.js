/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * PasswordPolicyService.js
 */

const IdentityConstants =
    require("./IdentityConstants");

class PasswordPolicyService {

    validate(password) {

        if (
            typeof password !==
            "string"
        ) {
            throw new Error(
                "Password must be a string."
            );
        }

        const errors = [];

        if (
            password.length <
            IdentityConstants
                .PASSWORD
                .MIN_LENGTH
        ) {

            errors.push(
                "Password is too short."
            );

        }

        if (
            password.length >
            IdentityConstants
                .PASSWORD
                .MAX_LENGTH
        ) {

            errors.push(
                "Password is too long."
            );

        }

        if (
            !/[A-Z]/.test(
                password
            )
        ) {

            errors.push(
                "Password must contain an uppercase letter."
            );

        }

        if (
            !/[a-z]/.test(
                password
            )
        ) {

            errors.push(
                "Password must contain a lowercase letter."
            );

        }

        if (
            !/[0-9]/.test(
                password
            )
        ) {

            errors.push(
                "Password must contain a digit."
            );

        }

        if (
            !/[^A-Za-z0-9]/.test(
                password
            )
        ) {

            errors.push(
                "Password must contain a special character."
            );

        }

        return {

            valid:
                errors.length === 0,

            errors

        };

    }

}

module.exports =
    new PasswordPolicyService();
