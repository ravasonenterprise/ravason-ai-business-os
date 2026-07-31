/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * PasswordHasher.js
 */

const crypto =
    require("crypto");

class PasswordHasher {

    generateSalt(
        length = 16
    ) {

        return crypto
            .randomBytes(length)
            .toString("hex");

    }

    hash(
        password,
        salt
    ) {

        if (!password) {
            throw new Error(
                "Password is required."
            );
        }

        if (!salt) {
            throw new Error(
                "Salt is required."
            );
        }

        return crypto
            .pbkdf2Sync(
                password,
                salt,
                100000,
                64,
                "sha512"
            )
            .toString("hex");

    }

    verify(
        password,
        salt,
        expectedHash
    ) {

        const actualHash =
            this.hash(
                password,
                salt
            );

        return crypto.timingSafeEqual(
            Buffer.from(
                actualHash,
                "hex"
            ),
            Buffer.from(
                expectedHash,
                "hex"
            )
        );

    }

}

module.exports =
    new PasswordHasher();
