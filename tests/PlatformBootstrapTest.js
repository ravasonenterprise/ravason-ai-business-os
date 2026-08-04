/**
 * Ravason Enterprise
 * Platform Bootstrap Test
 */

const PlatformBootstrap = require("../platform/runtime/PlatformBootstrap");

console.log("======================================");
console.log(" Ravason Platform Bootstrap");
console.log("======================================");

const bootstrap = new PlatformBootstrap();

bootstrap.initialize();

console.log("Registered Runtimes:");
console.log(bootstrap.getRegisteredRuntimes());

console.log("Runtime Count:");
console.log(bootstrap.getRuntimeCount());

if (
    bootstrap.getRuntimeCount() === 2
) {

    console.log("PLATFORM BOOTSTRAP TEST PASSED");

} else {

    console.log("PLATFORM BOOTSTRAP TEST FAILED");
    process.exit(1);

}
