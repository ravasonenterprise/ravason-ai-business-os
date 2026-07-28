const RavasonEntitlementService = {

    entitlements: [],


    create(entitlement) {

        if (
            !RavasonEntitlementModel
                .validate(entitlement)
        ) {

            throw new Error(
                "Invalid entitlement."
            );

        }


        this.entitlements.push(
            entitlement
        );


        return entitlement;

    },


    getByTenant(
        tenantId
    ) {

        return (

            this.entitlements.filter(

                entitlement =>

                    entitlement.tenantId ===
                    tenantId

            )

        );

    },


    checkAccess(
        tenantId,
        module
    ) {

        const entitlement =

            this.entitlements.find(

                item =>

                    item.tenantId === tenantId &&

                    item.module === module

            );


        if (
            !entitlement
        ) {

            return {

                allowed: false,

                reason:
                    "Module entitlement not found."

            };

        }


        return {

            allowed:
                entitlement.enabled,

            reason:

                entitlement.enabled

                    ? "Access granted."

                    : "Module disabled."

        };

    },


    hasFeature(
        tenantId,
        feature
    ) {

        const entitlement =

            this.entitlements.find(

                item =>

                    item.tenantId === tenantId

            );


        return !!(

            entitlement &&

            entitlement.features &&

            entitlement.features[feature]

        );

    },


    remove(
        tenantId,
        module
    ) {

        const index =

            this.entitlements.findIndex(

                item =>

                    item.tenantId === tenantId &&

                    item.module === module

            );


        if (
            index === -1
        ) {

            return false;

        }


        this.entitlements.splice(
            index,
            1
        );


        return true;

    }

};


window.RavasonEntitlementService =
    RavasonEntitlementService;
