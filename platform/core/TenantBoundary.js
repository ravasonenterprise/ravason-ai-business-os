const RavasonTenantBoundary = {

    requireCurrentTenant() {

        const tenant =
            RavasonTenantService
                .getCurrentTenant();


        if (
            !tenant
        ) {

            throw new Error(

                "No active tenant is selected."

            );

        }


        return tenant;

    },


    getTenantId() {

        const tenant =
            this.requireCurrentTenant();


        return tenant.id;

    },


    attachTenantId(data = {}) {

        const tenantId =
            this.getTenantId();


        return {

            ...data,

            tenantId:

                tenantId

        };

    },


    belongsToCurrentTenant(
        record
    ) {

        if (
            !record ||
            !record.tenantId
        ) {

            return false;

        }


        return record.tenantId ===
            this.getTenantId();

    },


    filterForCurrentTenant(
        records
    ) {

        if (
            !Array.isArray(
                records
            )
        ) {

            return [];

        }


        const tenantId =
            this.getTenantId();


        return records.filter(

            record =>
                record &&
                record.tenantId ===
                tenantId

        );

    }

};


window.RavasonTenantBoundary =
    RavasonTenantBoundary;
