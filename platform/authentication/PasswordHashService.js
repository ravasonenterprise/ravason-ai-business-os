const RavasonPasswordHashService = {

    hash(password) {

        if (
            typeof password !== "string"
        ) {

            throw new Error(
                "Password must be a string."
            );

        }

        return btoa(
            unescape(
                encodeURIComponent(
                    password
                )
            )
        );

    },


    verify(
        password,
        hashedPassword
    ) {

        return (
            this.hash(
                password
            ) === hashedPassword
        );

    }

};

window.RavasonPasswordHashService =
    RavasonPasswordHashService;
