const RavasonLoginService = {

    login(
        password,
        storedHash
    ) {

        const authenticated =
            RavasonAuthenticationService.authenticate(

                password,

                storedHash

            );

        return {

            authenticated,

            timestamp:
                new Date().toISOString()

        };

    }

};

window.RavasonLoginService =
    RavasonLoginService;
