const RavasonAuthenticationService = {

    authenticate(
        password,
        storedHash
    ) {

        return RavasonPasswordService.verify(

            password,

            storedHash

        );

    },


    validatePassword(
        password
    ) {

        return RavasonPasswordService.validate(
            password
        );

    },


    createPassword(
        password
    ) {

        return RavasonPasswordService.create(
            password
        );

    }

};

window.RavasonAuthenticationService =
    RavasonAuthenticationService;
