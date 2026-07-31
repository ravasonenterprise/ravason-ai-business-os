/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * PermissionModel.js
 */

class PermissionModel {

    constructor(data = {}) {

        this.id =
            data.id || null;

        this.name =
            data.name || "";

        this.resource =
            data.resource || "";

        this.action =
            data.action || "";

        this.description =
            data.description || "";

        this.system =
            Boolean(data.system);

        this.createdAt =
            data.createdAt ||
            new Date().toISOString();

        this.updatedAt =
            data.updatedAt ||
            new Date().toISOString();

    }

    getKey() {

        return (
            this.resource +
            ":" +
            this.action
        );

    }

    toJSON() {

        return {

            id: this.id,

            name: this.name,

            resource:
                this.resource,

            action:
                this.action,

            description:
                this.description,

            system:
                this.system,

            createdAt:
                this.createdAt,

            updatedAt:
                this.updatedAt

        };

    }

}

module.exports =
    PermissionModel;
