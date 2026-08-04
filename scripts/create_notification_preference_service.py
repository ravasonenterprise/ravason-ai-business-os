from pathlib import Path

target = Path("platform/notifications/NotificationPreferenceService.js")

content = r'''/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationPreferenceService
 */

const NotificationConstants = require("./NotificationConstants");

class NotificationPreferenceService {

    constructor() {

        this.preferences = new Map();

    }

    setPreferences(recipient, preferences = {}) {

        this.preferences.set(recipient, preferences);

        return true;

    }

    getPreferences(recipient) {

        return this.preferences.get(recipient) || {};

    }

    isChannelEnabled(recipient, channel) {

        const preferences = this.getPreferences(recipient);

        if (!(channel in preferences)) {
            return true;
        }

        return preferences[channel] === true;

    }

    getEnabledChannels(recipient) {

        return Object.values(NotificationConstants.CHANNELS)
            .filter(channel => this.isChannelEnabled(recipient, channel));

    }

}

module.exports = NotificationPreferenceService;
'''

target.parent.mkdir(parents=True, exist_ok=True)
target.write_text(content.strip() + "\n", encoding="utf-8")

print(f"Created {target}")
