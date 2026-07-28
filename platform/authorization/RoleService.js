const RavasonRoleService = {

    roles: [],


    create(
        data = {}
    ) {

        const role =
            RavasonRoleModel.create(
                data
            );

        this.roles.push(
            role
        );

        return role;

    },


    get(
        roleId
    ) {

        return (

            this.roles.find(

                role =>
                    role.id === roleId

            ) || null

        );

    },


    getAll() {

        return [
            ...this.roles
        ];

    },


    update(
        roleId,
        updates = {}
    ) {

        const role =
            this.get(
                roleId
            );

        if (
            !role
        ) {

            return null;

        }

        Object.assign(

            role,

            updates,

            {

                updatedAt:
                    new Date()
                        .toISOString()

            }

        );

        return role;

    },


    delete(
        roleId
    ) {

        const index =
            this.roles.findIndex(

                role =>
                    role.id === roleId

            );


        if (
            index === -1
        ) {

            return false;

        }


        this.roles.splice(
            index,
            1
        );

        return true;

    }

};

window.RavasonRoleService =
    RavasonRoleService;
