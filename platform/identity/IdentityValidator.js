const RavasonIdentityValidator = {

    IDENTIFIER_PATTERN:
        /^[a-z0-9-]+$/,

    USERNAME_PATTERN:
        /^[A-Za-z0-9._-]{3,50}$/,

    EMAIL_PATTERN:
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

    isRequired(value) {

        return value !== undefined &&
            value !== null &&
            value !== "";

    },

    isValidIdentifier(value) {

        if (!this.isRequired(value)) {

            return false;

        }

        return this.IDENTIFIER_PATTERN.test(value);

    },

    isValidTenantId(tenantId) {

        return this.isValidIdentifier(tenantId);

    },

    isValidUserId(userId) {

        return this.isValidIdentifier(userId);

    },

    isValidRoleId(roleId) {

        return this.isValidIdentifier(roleId);

    },

    isValidProductId(productId) {

        return this.isValidIdentifier(productId);

    },

    isValidModuleId(moduleId) {

        return this.isValidIdentifier(moduleId);

    },

    isValidEmail(email) {

        if (!this.isRequired(email)) {

            return false;

        }

        return this.EMAIL_PATTERN.test(email);

    },

    isValidUsername(username) {

        if (!this.isRequired(username)) {

            return false;

        }

        return this.USERNAME_PATTERN.test(username);

    },

    isValidPassword(password) {

        return typeof password === "string" &&
            password.length >= 8;

    },

    validate(value, validator) {

        if (typeof validator !== "function") {

            return false;

        }

        return validator.call(this, value);

    }

};

window.RavasonIdentityValidator =
    RavasonIdentityValidator;
