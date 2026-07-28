const RavasonSessionModel = {

    STATUS: {

        ACTIVE:
            "active",

        EXPIRED:
            "expired",

        TERMINATED:
            "terminated"

    },


    create(data = {}) {

        const now =
            new Date().toISOString();

        return {

            sessionId:
                data.sessionId,

            tenantId:
                data.tenantId || null,

            userId:
                data.userId || null,

            identityId:
                data.identityId || null,

            productId:
                data.productId || null,

            roleId:
                data.roleId || null,

            status:
                data.status ||
                this.STATUS.ACTIVE,

            startedAt:
                data.startedAt ||
                now,

            expiresAt:
                data.expiresAt || null,

            lastActivityAt:
                data.lastActivityAt ||
                now,

            metadata:
                data.metadata || {}

        };

    }

};

window.RavasonSessionModel =
    RavasonSessionModel;
