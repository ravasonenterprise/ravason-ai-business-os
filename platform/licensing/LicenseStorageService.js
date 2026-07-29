const RavasonLicenseStorageService = {

    STORAGE_KEY:
        "ravason_platform_licenses",


    getAll() {

        return JSON.parse(

            localStorage.getItem(
                this.STORAGE_KEY
            ) || "[]"

        );

    },


    saveAll(
        licenses
    ) {

        localStorage.setItem(

            this.STORAGE_KEY,

            JSON.stringify(
                licenses
            )

        );

    },


    get(
        licenseId
    ) {

        return (

            this.getAll().find(

                license =>
                    license.id ===
                    licenseId

            ) || null

        );

    },


    create(
        license
    ) {

        const licenses =
            this.getAll();

        licenses.push(
            license
        );

        this.saveAll(
            licenses
        );

        return license;

    },


    update(
        license
    ) {

        const licenses =
            this.getAll();

        const index =
            licenses.findIndex(

                item =>
                    item.id ===
                    license.id

            );

        if (
            index === -1
        ) {

            return null;

        }

        license.updatedAt =
            new Date()
                .toISOString();

        licenses[index] =
            license;

        this.saveAll(
            licenses
        );

        return license;

    },


    delete(
        licenseId
    ) {

        const licenses =
            this.getAll();

        const filtered =
            licenses.filter(

                license =>
                    license.id !==
                    licenseId

            );

        this.saveAll(
            filtered
        );

        return true;

    },


    exists(
        licenseId
    ) {

        return (
            this.get(
                licenseId
            ) !== null
        );

    }

};

window.RavasonLicenseStorageService =
    RavasonLicenseStorageService;
