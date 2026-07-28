const RavasonTokenService = {

    create(
        identityId,
        tokenType =
            RavasonAuthenticationConstants
                .TOKEN_TYPE
                .ACCESS
    ) {

        if (
            !identityId
        ) {

            throw new Error(
                "Identity ID is required."
            );

        }

        return {

            token:

                btoa(

                    identityId +
                    ":" +
                    Date.now()

                ),

            identityId,

            tokenType,

            createdAt:
                new Date().toISOString()

        };

    },


    validate(
        token
    ) {

        return (
            typeof token === "string" &&
            token.length > 0
        );

    }

};

window.RavasonTokenService =
    RavasonTokenService;
