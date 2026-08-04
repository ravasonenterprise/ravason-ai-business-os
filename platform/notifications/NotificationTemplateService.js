/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationTemplateService
 */

class NotificationTemplateService {

    constructor() {

        this.templates = new Map();

    }

    register(name, template) {

        this.templates.set(name, template);

        return true;

    }

    get(name) {

        return this.templates.get(name) || null;

    }

    exists(name) {

        return this.templates.has(name);

    }

    remove(name) {

        return this.templates.delete(name);

    }

    getAll() {

        return Object.fromEntries(this.templates);

    }

    clear() {

        this.templates.clear();

    }

}

module.exports = NotificationTemplateService;
