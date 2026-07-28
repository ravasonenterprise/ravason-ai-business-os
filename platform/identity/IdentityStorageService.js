const RavasonIdentityStorageService = {

    STORAGE_KEY:
        "ravason_platform_identity",

    getAll() {

        const identities =
            RavasonStorageService.get(
                this.STORAGE_KEY
            );

        return Array.isArray(identities)
            ? identities
            : [];

    },

    get(identityId) {

        if (!identityId) {

            return null;

        }

        return this.getAll().find(

            identity =>
                identity.id === identityId

        ) || null;

    },

    save(identity) {

        if (
            !identity ||
            !identity.id
        ) {

            throw new Error(
                "Identity ID is required."
            );

        }

        const identities =
            this.getAll();

        const index =
            identities.findIndex(

                item =>
                    item.id ===
                    identity.id

            );

        if (index >= 0) {

            identities[index] =
                identity;

        } else {

            identities.push(
                identity
            );

        }

        RavasonStorageService.set(

            this.STORAGE_KEY,

            identities

        );

        return identity;

    },

    remove(identityId) {

        const identities =
            this.getAll();

        const filtered =
            identities.filter(

                identity =>
                    identity.id !==
                    identityId

            );

        RavasonStorageService.set(

            this.STORAGE_KEY,

            filtered

        );

        return true;

    },

    clear() {

        RavasonStorageService.set(

            this.STORAGE_KEY,

            []

        );

        return true;

    }

};

window.RavasonIdentityStorageService =
    RavasonIdentityStorageService;
