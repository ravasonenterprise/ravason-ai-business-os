const RavasonTenantResolverService = {

    resolveById(
        tenantId
    ) {

        if (
            !tenantId
        ) {

            return null;

        }


        return RavasonTenantService.get(
            tenantId
        );

    },


    resolve(
        context = {}
    ) {

        if (
            context.tenantId
        ) {

            return this.resolveById(
                context.tenantId
            );

        }


        if (
            context.tenant &&
            context.tenant.id
        ) {

            return this.resolveById(
                context.tenant.id
            );

        }


        return null;

    },


    exists(
        tenantId
    ) {

        return (
            this.resolveById(
                tenantId
            ) !== null
        );

    }

};


window.RavasonTenantResolverService =
    RavasonTenantResolverService;
