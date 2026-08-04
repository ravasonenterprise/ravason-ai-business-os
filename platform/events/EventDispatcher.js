/**
 * Ravason Enterprise
 * Event Platform
 * EventDispatcher
 *
 * Dispatches events to registered subscribers.
 */

class EventDispatcher {

    dispatch(event, subscribers = []) {

        const results = [];

        for (const subscriber of subscribers) {

            try {

                if (
                    subscriber &&
                    typeof subscriber.handle === "function"
                ) {

                    subscriber.handle(event);

                    results.push({
                        subscriber:
                            subscriber.constructor
                                ? subscriber.constructor.name
                                : "AnonymousSubscriber",
                        success: true
                    });

                }

            } catch (error) {

                results.push({
                    subscriber:
                        subscriber && subscriber.constructor
                            ? subscriber.constructor.name
                            : "AnonymousSubscriber",
                    success: false,
                    error: error.message
                });

            }

        }

        return results;

    }

}

module.exports = EventDispatcher;
