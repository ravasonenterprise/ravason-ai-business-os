const RavasonAIConversationService = {

    STORAGE_KEY:
        "ravason_ai_conversations",


    getStore() {

        return RavasonStorageService.get(
            this.STORAGE_KEY
        ) || {};

    },


    getMessages(profileId) {

        if (!profileId) {

            return [];

        }

        const store =
            this.getStore();

        return store[profileId] || [];

    },


    addMessage(
        profileId,
        role,
        content
    ) {

        if (!profileId) {

            console.error(
                "Cannot save AI message without profile ID."
            );

            return false;

        }


        const store =
            this.getStore();


        if (
            !Array.isArray(
                store[profileId]
            )
        ) {

            store[profileId] = [];

        }


        store[profileId].push({

            role: role,

            content: content,

            timestamp:
                new Date().toISOString()

        });


        return RavasonStorageService.set(

            this.STORAGE_KEY,

            store

        );

    },


    clearMessages(profileId) {

        if (!profileId) {

            return false;

        }


        const store =
            this.getStore();


        delete store[profileId];


        return RavasonStorageService.set(

            this.STORAGE_KEY,

            store

        );

    },


    clearAllMessages() {

        RavasonStorageService.remove(

            this.STORAGE_KEY

        );

    }

};


window.RavasonAIConversationService =
    RavasonAIConversationService;
