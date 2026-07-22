const RavasonRouter = {

    currentRoute: "dashboard",

    navigate(route) {

        this.currentRoute = route;

        window.dispatchEvent(
            new CustomEvent("ravason:navigate", {
                detail: {
                    route: route
                }
            })
        );

    }

};

window.RavasonRouter = RavasonRouter;
