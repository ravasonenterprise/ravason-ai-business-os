/**
 * Ravason Enterprise
 * Event Platform Integration Test
 */

const EventRuntimeService = require("../platform/events/EventRuntimeService");

console.log("======================================");
console.log(" Ravason Event Platform Integration");
console.log("======================================");

const runtime = new EventRuntimeService();

runtime.initialize();

const publisher = runtime.getPublisher();

let received = false;

const subscriber = {

    handle(event) {
        received = true;
    }

};

publisher.subscribe(
    "USER_CREATED",
    subscriber
);

const result = publisher.publish({

    eventName: "USER_CREATED",
    source: "identity",
    payload: {
        id: 1,
        username: "admin"
    }

});

console.log("✓ Runtime initialized:", runtime.isInitialized());
console.log("✓ Publish:", result.success);
console.log("✓ Repository Count:", publisher.getEventCount());
console.log("✓ Subscribers:", received ? 1 : 0);
console.log("✓ Runtime:", runtime.getStatus().initialized);

if (
    runtime.isInitialized() &&
    result.success &&
    publisher.getEventCount() === 1 &&
    received
) {

    console.log("EVENT PLATFORM TEST PASSED");

} else {

    console.log("EVENT PLATFORM TEST FAILED");
    process.exit(1);

}
