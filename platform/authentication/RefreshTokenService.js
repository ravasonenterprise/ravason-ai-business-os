const RavasonRefreshTokenService = {

    create(
        identityId
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
                    ":refresh:" +
                    Date.now()

                ),

            identityId,

            tokenType:
                RavasonAuthenticationConstants
                    .TOKEN_TYPE
                    .REFRESH,

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

window.RavasonRefreshTokenService =
    RavasonRefreshTokenService;
