const RavasonSubscriptionStorageService = {

    storage: {

        plans: [],

        subscriptions: [],

        entitlements: []

    },

    getPlans() {

        return this.storage.plans;

    },

    getSubscriptions() {

        return this.storage.subscriptions;

    },

    getEntitlements() {

        return this.storage.entitlements;

    },

    savePlans(plans) {

        this.storage.plans = [...plans];

        return true;

    },

    saveSubscriptions(subscriptions) {

        this.storage.subscriptions = [...subscriptions];

        return true;

    },

    saveEntitlements(entitlements) {

        this.storage.entitlements = [...entitlements];

        return true;

    },

    clear() {

        this.storage = {

            plans: [],

            subscriptions: [],

            entitlements: []

        };

        return true;

    }

};

window.RavasonSubscriptionStorageService =
    RavasonSubscriptionStorageService;
