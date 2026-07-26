const RavasonDiagnostics = {

    run() {

        const service =
            window.RavasonBusinessProfileService;

        if (!service) {

            return {
                success: false,
                error:
                    "BusinessProfileService is not available."
            };

        }

        const store =
            service.getStore();

        return {

            success: true,

            profileCount:
                store.profiles.length,

            activeProfileId:
                store.activeProfileId,

            profiles:
                store.profiles,

            activeProfile:
                service.getActiveProfile()

        };

    }

};


window.RavasonDiagnostics =
    RavasonDiagnostics;
