const RavasonIdentityService = {

    create(data = {}) {

        if (
            !window.RavasonIdentityModel
        ) {

            throw new Error(
                "IdentityModel is not available."
            );

        }

        if (
            !window.RavasonIdentityStorageService
        ) {

            throw new Error(
                "IdentityStorageService is not available."
            );

        }

        const identity =
            RavasonIdentityModel.create(
                data
            );

        RavasonIdentityStorageService.save(
            identity.id,
            identity
        );

        return identity;

    },


    get(identityId) {

        return RavasonIdentityStorageService.get(
            identityId
        );

    },


    getAll() {

        return RavasonIdentityStorageService.getAll();

    },


    update(
        identityId,
        updates = {}
    ) {

        const existing =
            this.get(
                identityId
            );

        if (
            !existing
        ) {

            return null;

        }

        const updated = {

            ...existing,

            ...updates,

            id:
                existing.id,

            identityType:
                existing.identityType,

            updatedAt:
                new Date()
                    .toISOString()

        };

        RavasonIdentityStorageService.save(
            identityId,
            updated
        );

        return updated;

    },


    delete(identityId) {

        return RavasonIdentityStorageService.delete(
            identityId
        );

    },


    exists(identityId) {

        return (
            this.get(
                identityId
            ) !== null
        );

    }

};

window.RavasonIdentityService =
    RavasonIdentityService;
