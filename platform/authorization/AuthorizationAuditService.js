const RavasonAuthorizationAuditService = {

    records: [],


    log(
        data = {}
    ) {

        const record = {

            id:
                crypto.randomUUID(),

            identityId:
                data.identityId || null,

            roleId:
                data.roleId || null,

            permissionId:
                data.permissionId || null,

            result:
                data.result || "denied",

            timestamp:
                new Date()
                    .toISOString()

        };


        this.records.push(
            record
        );


        return record;

    },


    getAll() {

        return [
            ...this.records
        ];

    },


    findByIdentity(
        identityId
    ) {

        return this.records.filter(

            record =>
                record.identityId === identityId

        );

    },


    clear() {

        this.records = [];

        return true;

    }

};


window.RavasonAuthorizationAuditService =
    RavasonAuthorizationAuditService;
