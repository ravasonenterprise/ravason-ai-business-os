const RavasonAuthenticationAuditService = {

    events: [],


    record(
        event
    ) {

        if (
            !event
        ) {

            throw new Error(
                "Authentication event is required."
            );

        }

        const auditEvent = {

            ...event,

            timestamp:
                new Date().toISOString()

        };

        this.events.push(
            auditEvent
        );

        return auditEvent;

    },


    getAll() {

        return [
            ...this.events
        ];

    },


    clear() {

        this.events = [];

    }

};

window.RavasonAuthenticationAuditService =
    RavasonAuthenticationAuditService;
