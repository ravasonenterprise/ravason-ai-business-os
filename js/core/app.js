document.addEventListener("DOMContentLoaded", () => {

    const mobileMenuButton =
        document.getElementById("mobile-menu-btn");

    const sidebar =
        document.querySelector(".sidebar");

    const navigationItems =
        document.querySelectorAll(".nav-item");


    /*
     * Mobile menu
     */

    if (mobileMenuButton && sidebar) {

        mobileMenuButton.addEventListener("click", () => {

            sidebar.classList.toggle("mobile-open");

        });

    }


    /*
     * Sidebar navigation
     */

    navigationItems.forEach((item) => {

        item.addEventListener("click", () => {

            const route =
                item.dataset.route;

            if (window.RavasonRouter) {

                window.RavasonRouter.navigate(route);

            }

            navigationItems.forEach((navItem) => {

                navItem.classList.remove("active");

            });

            item.classList.add("active");


            /*
             * Close mobile sidebar
             */

            if (sidebar) {

                sidebar.classList.remove("mobile-open");

            }

        });

    });


    /*
     * Route changes
     */

    window.addEventListener(
        "ravason:navigate",
        (event) => {

            console.log(
                "Ravason route:",
                event.detail.route
            );

        }
    );


    /*
     * Initialize workspace
     */

    if (window.RavasonWorkspace) {

        window.RavasonWorkspace.init();

    }

});
