const RavasonTenantModel = {

    create(data = {}) {

        return {

            id:
                data.id || crypto.randomUUID(),

            name:
                data.name || "",

            type:
                data.type ||
                RavasonTenantConstants
                    .TYPES
                    .BUSINESS,

            status:
                data.status ||
                RavasonTenantConstants
                    .STATUS
                    .ACTIVE,

            ownerId:
                data.ownerId || null,

            users:
                data.users || [],

            modules:
                data.modules || [],

            createdAt:
                new Date()
                    .toISOString(),

            updatedAt:
                new Date()
                    .toISOString()

        };

    },


    validate(tenant) {

        return (

            tenant &&

            typeof tenant.id === "string" &&

            typeof tenant.name === "string"

        );

    }

};


window.RavasonTenantModel =
    RavasonTenantModel;
