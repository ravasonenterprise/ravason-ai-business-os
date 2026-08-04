/**
 * Ravason Enterprise
 * Notification Platform Integration Test
 */

const NotificationModule = require("../platform/notifications/NotificationModule");

console.log("======================================");
console.log(" Ravason Notification Platform");
console.log("======================================");

const moduleInstance = new NotificationModule();

const initialized = moduleInstance.initialize();

console.log("✓ Module:", moduleInstance.getName());
console.log("✓ Initialized:", initialized);
console.log("✓ Runtime:", moduleInstance.getRuntime().isInitialized());

if (
    initialized &&
    moduleInstance.getRuntime().isInitialized()
) {

    console.log("NOTIFICATION PLATFORM TEST PASSED");

} else {

    console.log("NOTIFICATION PLATFORM TEST FAILED");
    process.exit(1);

}
