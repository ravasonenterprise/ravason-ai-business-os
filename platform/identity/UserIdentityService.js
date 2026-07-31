const RavasonUserIdentityService = {

    create(data = {}) {

        if (
            !window.RavasonUserModel
        ) {

            throw new Error(
                "UserModel is not available."
            );

        }

        const user =
            RavasonUserModel.create(
                data
            );

        return RavasonIdentityService.create(
            user
        );

    },


    get(userId) {

        const identity =
            RavasonIdentityService.get(
                userId
            );

        if (
            !identity ||
            identity.identityType !==
                "user"
        ) {

            return null;

        }

        return identity;

    },


    getAll() {

        return RavasonIdentityService
            .getAll()
            .filter(

                identity =>

                    identity.identityType ===
                    "user"

            );

    },


    update(
        userId,
        updates = {}
    ) {

        return RavasonIdentityService.update(

            userId,

            updates

        );

    },


    delete(
        userId
    ) {

        return RavasonIdentityService.delete(
            userId
        );

    },


    exists(
        userId
    ) {

        return this.get(
            userId
        ) !== null;

    }

};

if (typeof window !== "undefined") {

    window.RavasonUserIdentityService =
        RavasonUserIdentityService;

}

if (typeof module !== "undefined") {

    module.exports =
        RavasonUserIdentityService;

}