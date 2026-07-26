const RavasonStorageService = {

    get(key) {

        const value =
            localStorage.getItem(key);

        if (!value) {

            return null;

        }

        try {

            return JSON.parse(value);

        } catch (error) {

            console.error(
                "Ravason Storage: Failed to parse data.",
                error
            );

            return null;

        }

    },


    set(key, value) {

        try {

            localStorage.setItem(

                key,

                JSON.stringify(value)

            );

            return true;

        } catch (error) {

            console.error(

                "Ravason Storage: Failed to save data.",

                error

            );

            return false;

        }

    },


    remove(key) {

        localStorage.removeItem(key);

    }

};


window.RavasonStorageService =
    RavasonStorageService;
