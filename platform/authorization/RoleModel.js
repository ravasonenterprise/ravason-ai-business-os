const RavasonRoleModel = {

    create(data = {}) {

        return {

            id:
                data.id || crypto.randomUUID(),

            name:
                data.name || "",

            description:
                data.description || "",

            permissions:
                data.permissions || [],

            createdAt:
                new Date().toISOString(),

            updatedAt:
                new Date().toISOString()

        };

    },


    validate(role) {

        return (

            role &&
            typeof role.id === "string" &&
            typeof role.name === "string"

        );

    }

};

window.RavasonRoleModel =
    RavasonRoleModel;
