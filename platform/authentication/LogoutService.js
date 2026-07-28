const RavasonLogoutService = {

    logout(
        session
    ) {

        if (
            !session
        ) {

            return {

                success: false,

                message:
                    "Session not found."

            };

        }

        return {

            success: true,

            sessionId:
                session.id,

            status:
                RavasonAuthenticationConstants
                    .SESSION_STATUS
                    .TERMINATED,

            timestamp:
                new Date().toISOString()

        };

    }

};

window.RavasonLogoutService =
    RavasonLogoutService;
