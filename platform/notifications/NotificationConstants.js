/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationConstants
 */

const NotificationConstants = Object.freeze({

    CHANNELS: Object.freeze({
        IN_APP: "in_app",
        EMAIL: "email",
        SMS: "sms",
        PUSH: "push",
        WHATSAPP: "whatsapp",
        WEBHOOK: "webhook"
    }),

    STATUS: Object.freeze({
        PENDING: "pending",
        QUEUED: "queued",
        SENT: "sent",
        DELIVERED: "delivered",
        FAILED: "failed"
    }),

    PRIORITY: Object.freeze({
        LOW: "low",
        NORMAL: "normal",
        HIGH: "high",
        CRITICAL: "critical"
    })

});

module.exports = NotificationConstants;
