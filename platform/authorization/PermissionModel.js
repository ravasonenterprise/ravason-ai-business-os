const RavasonPermissionModel = {

    create(data = {}) {

        return {

            id:
                data.id || crypto.randomUUID(),

            resource:
                data.resource || "",

            action:
                data.action || "",

            description:
                data.description || "",

            createdAt:
                new Date().toISOString(),

            updatedAt:
                new Date().toISOString()

        };

    },


    validate(permission) {

        return (

            permission &&

            typeof permission.id === "string" &&

            typeof permission.resource === "string" &&

            typeof permission.action === "string"

        );

    }

};

window.RavasonPermissionModel =
    RavasonPermissionModel;
