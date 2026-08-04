/**
 * Ravason Enterprise
 * Event Platform
 * EventModel
 */

const EventConstants = require("./EventConstants");

class EventModel {

    constructor(data = {}) {

        this.id = data.id || null;

        this.eventName = data.eventName || "";

        this.source =
            data.source ||
            EventConstants.SOURCES.SYSTEM;

        this.priority =
            data.priority ||
            EventConstants.PRIORITY.NORMAL;

        this.status =
            data.status ||
            EventConstants.STATUS.PENDING;

        this.payload =
            data.payload || {};

        this.metadata =
            data.metadata || {};

        this.timestamp =
            data.timestamp ||
            new Date().toISOString();

    }

    toJSON() {

        return {
            id: this.id,
            eventName: this.eventName,
            source: this.source,
            priority: this.priority,
            status: this.status,
            payload: this.payload,
            metadata: this.metadata,
            timestamp: this.timestamp
        };

    }

}

module.exports = EventModel;
