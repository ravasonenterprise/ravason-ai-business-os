const RavasonPermissionService = {

    permissions: [],


    create(
        data = {}
    ) {

        const permission =
            RavasonPermissionModel.create(
                data
            );

        this.permissions.push(
            permission
        );

        return permission;

    },


    get(
        permissionId
    ) {

        return (

            this.permissions.find(

                permission =>
                    permission.id === permissionId

            ) || null

        );

    },


    getAll() {

        return [
            ...this.permissions
        ];

    },


    update(
        permissionId,
        updates = {}
    ) {

        const permission =
            this.get(
                permissionId
            );

        if (
            !permission
        ) {

            return null;

        }


        Object.assign(

            permission,

            updates,

            {

                updatedAt:
                    new Date()
                        .toISOString()

            }

        );


        return permission;

    },


    delete(
        permissionId
    ) {

        const index =
            this.permissions.findIndex(

                permission =>
                    permission.id === permissionId

            );


        if (
            index === -1
        ) {

            return false;

        }


        this.permissions.splice(
            index,
            1
        );


        return true;

    }

};


window.RavasonPermissionService =
    RavasonPermissionService;
