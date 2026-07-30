/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * LicensePolicyService.js
 */

class LicensePolicyService {

    canActivate(license) {

        if (!license) {
            return false;
        }

        return (
            license.status === "ACTIVE" ||
            license.status === "PENDING"
        );

    }

    canRenew(license) {

        if (!license) {
            return false;
        }

        return (
            license.status === "ACTIVE"
        );

    }

    canTransfer(license) {

        if (!license) {
            return false;
        }

        return Boolean(
            license.transferable
        );

    }

    canRegisterDevice(
        license
    ) {

        if (!license) {
            return false;
        }

        const devices =
            Array.isArray(
                license.activatedDevices
            )
            ? license.activatedDevices.length
            : 0;

        return (
            devices <
            Number(
                license.maxDevices || 0
            )
        );

    }

    evaluate(license) {

        return {

            activation:
                this.canActivate(
                    license
                ),

            renewal:
                this.canRenew(
                    license
                ),

            transfer:
                this.canTransfer(
                    license
                ),

            deviceRegistration:
                this.canRegisterDevice(
                    license
                )

        };

    }

}

module.exports =
    new LicensePolicyService();
