const RavasonWorkspace = {

    workspace: null,

    views: {

        dashboard: {
            title: "Business Command Center",
            subtitle: "Your central business intelligence workspace."
        },

        "business-builder": {
            title: "AI Business Builder",
            subtitle: "Build and grow your business with intelligent tools."
        },

        crm: {
            title: "Customer Relationship Management",
            subtitle: "Manage customers, relationships, and business opportunities."
        },

        finance: {
            title: "Finance",
            subtitle: "Monitor revenue, expenses, and financial performance."
        },

        inventory: {
            title: "Inventory",
            subtitle: "Track products, stock, and inventory operations."
        },

        sales: {
            title: "Sales & POS",
            subtitle: "Manage sales transactions and point-of-sale operations."
        },

        marketplace: {
            title: "Marketplace",
            subtitle: "Manage products, services, and marketplace operations."
        },

        "ai-assistant": {
            title: "AI Assistant",
            subtitle: "Your intelligent business assistant."
        },

        settings: {
            title: "Settings",
            subtitle: "Configure your Ravason AI Business OS."
        }

    },

    init() {

        this.workspace =
            document.querySelector(".dashboard");

        window.addEventListener(
            "ravason:navigate",
            (event) => {

                this.render(
                    event.detail.route
                );

            }
        );

    },

    render(route) {

        if (
            route === "business-builder" &&
            window.RavasonAIBusinessBuilder
        ) {

            this.workspace.innerHTML =
                window.RavasonAIBusinessBuilder.render();

            window.RavasonAIBusinessBuilder.loadProfile();

            return;

        }


        if (
            route === "business-profile" &&
            window.RavasonBusinessProfile
        ) {

            this.workspace.innerHTML =
                window.RavasonBusinessProfile.render();

            window.RavasonBusinessProfile.init();

            return;

        }

        const view =
            this.views[route];

        if (!view || !this.workspace) {
            return;
        }

        this.workspace.innerHTML = `

            <div class="workspace-placeholder">

                <div class="workspace-placeholder-icon">
                    ✨
                </div>

                <h1>${view.title}</h1>

                <p>${view.subtitle}</p>

                <span class="workspace-status">
                    Module foundation ready
                </span>

            </div>

        `;

    }

};

window.RavasonWorkspace = RavasonWorkspace;
