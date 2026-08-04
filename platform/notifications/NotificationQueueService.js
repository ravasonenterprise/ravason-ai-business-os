/**
 * Ravason Enterprise
 * Notification Platform
 * NotificationQueueService
 */

class NotificationQueueService {

    constructor() {

        this.queue = [];

    }

    enqueue(notification) {

        this.queue.push(notification);

        return this.queue.length;

    }

    dequeue() {

        if (this.isEmpty()) {
            return null;
        }

        return this.queue.shift();

    }

    peek() {

        if (this.isEmpty()) {
            return null;
        }

        return this.queue[0];

    }

    isEmpty() {

        return this.queue.length === 0;

    }

    size() {

        return this.queue.length;

    }

    clear() {

        this.queue = [];

    }

}

module.exports = NotificationQueueService;
