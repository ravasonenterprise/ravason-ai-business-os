const RavasonSessionService = {

    create(data = {}) {

        if (
            !window.RavasonSessionModel
        ) {

            throw new Error(
                "SessionModel is not available."
            );

        }

        const session =
            RavasonSessionModel.create(
                data
            );

        return session;

    },


    isActive(session) {

        return Boolean(

            session &&

            session.status ===
                RavasonSessionModel.STATUS.ACTIVE

        );

    },


    terminate(session) {

        if (
            !session
        ) {

            return null;

        }

        return {

            ...session,

            status:
                RavasonSessionModel.STATUS.TERMINATED,

            lastActivityAt:
                new Date()
                    .toISOString()

        };

    },


    expire(session) {

        if (
            !session
        ) {

            return null;

        }

        return {

            ...session,

            status:
                RavasonSessionModel.STATUS.EXPIRED,

            lastActivityAt:
                new Date()
                    .toISOString()

        };

    }

};

window.RavasonSessionService =
    RavasonSessionService;
