const RavasonBusinessProfileService = {

    STORAGE_KEY:
        "ravason_business_profiles",

    LEGACY_STORAGE_KEY:
        "ravason_business_profile",


    generateProfileId() {

        return (
            "profile-" +
            Date.now() +
            "-" +
            Math.random()
                .toString(36)
                .slice(2, 8)
        );

    },


    getStore() {

        let store =
            RavasonStorageService.get(
                this.STORAGE_KEY
            );


        if (
            store &&
            Array.isArray(store.profiles)
        ) {

            let changed =
                false;


            const usedIds =
                new Set();


            store.profiles =
                store.profiles.map(
                    profile => {

                        let id =
                            profile.id;


                        if (
                            !id ||
                            usedIds.has(id)
                        ) {

                            id =
                                this.generateProfileId();

                            changed =
                                true;

                        }


                        usedIds.add(id);


                        return {

                            ...profile,

                            id:

                                id

                        };

                    }
                );


            const activeExists =
                store.profiles.some(

                    profile =>
                        profile.id ===
                        store.activeProfileId

                );


            if (
                store.profiles.length &&
                !activeExists
            ) {

                store.activeProfileId =
                    store.profiles[0].id;

                changed =
                    true;

            }


            if (
                !store.profiles.length
            ) {

                store.activeProfileId =
                    null;

            }


            if (
                changed
            ) {

                RavasonStorageService.set(

                    this.STORAGE_KEY,

                    store

                );

            }


            return store;

        }


        const legacyProfile =
            RavasonStorageService.get(
                this.LEGACY_STORAGE_KEY
            );


        if (
            legacyProfile &&
            legacyProfile.businessName
        ) {

            const migratedProfile = {

                ...legacyProfile,

                id:
                    this.generateProfileId()

            };


            store = {

                profiles: [

                    migratedProfile

                ],

                activeProfileId:
                    migratedProfile.id

            };


            RavasonStorageService.set(

                this.STORAGE_KEY,

                store

            );


            return store;

        }


        return {

            profiles: [],

            activeProfileId:
                null

        };

    },


    getProfiles() {

        return this.getStore().profiles;

    },


    getActiveProfile() {

        const store =
            this.getStore();


        return store.profiles.find(

            profile =>
                profile.id ===
                store.activeProfileId

        ) || {};

    },


    getProfile() {

        return this.getActiveProfile();

    },


    saveProfile(profile) {

        const store =
            this.getStore();


        const existingProfile =
            store.profiles.find(

                item =>
                    item.id ===
                    profile.id

            );


        if (
            existingProfile
        ) {

            Object.assign(

                existingProfile,

                profile,

                {

                    id:
                        existingProfile.id

                }

            );

        } else {

            const newProfile = {

                ...profile,

                id:
                    profile.id ||
                    this.generateProfileId()

            };


            store.profiles.push(

                newProfile

            );


            store.activeProfileId =
                newProfile.id;

        }


        return RavasonStorageService.set(

            this.STORAGE_KEY,

            store

        );

    },


    createProfile(profile) {

        const newProfile = {

            ...profile,

            id:
                profile.id ||
                this.generateProfileId()

        };


        const store =
            this.getStore();


        store.profiles.push(

            newProfile

        );


        store.activeProfileId =
            newProfile.id;


        return RavasonStorageService.set(

            this.STORAGE_KEY,

            store

        );

    },


    setActiveProfile(profileId) {

        const store =
            this.getStore();


        const exists =
            store.profiles.some(

                profile =>
                    profile.id ===
                    profileId

            );


        if (
            !exists
        ) {

            console.error(

                "Cannot activate profile. " +
                "Profile ID not found:",

                profileId

            );

            return false;

        }


        store.activeProfileId =
            profileId;


        const saved =
            RavasonStorageService.set(

                this.STORAGE_KEY,

                store

            );


        console.log(

            "Active profile changed:",

            profileId

        );


        return saved;

    },


    deleteProfile(profileId) {

        const store =
            this.getStore();


        store.profiles =
            store.profiles.filter(

                profile =>
                    profile.id !==
                    profileId

            );


        if (
            store.activeProfileId ===
            profileId
        ) {

            store.activeProfileId =
                store.profiles.length
                    ? store.profiles[0].id
                    : null;

        }


        return RavasonStorageService.set(

            this.STORAGE_KEY,

            store

        );

    },


    clearProfiles() {

        RavasonStorageService.remove(

            this.STORAGE_KEY

        );

    },


    clearProfile() {

        this.clearProfiles();

    }

};


window.RavasonBusinessProfileService =
    RavasonBusinessProfileService;
