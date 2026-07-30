/**
 * Ravason Enterprise
 * Platform Licensing Foundation
 *
 * SeatManagementService.js
 */

class SeatManagementService {

    assignSeat(license, seatId) {

        if (!license) {
            throw new Error(
                "License is required."
            );
        }

        if (!seatId) {
            throw new Error(
                "Seat id is required."
            );
        }

        if (!Array.isArray(license.seats)) {
            license.seats = [];
        }

        if (
            !license.seats.includes(seatId)
        ) {
            license.seats.push(seatId);
        }

        return license;

    }

    releaseSeat(license, seatId) {

        if (
            !license ||
            !Array.isArray(license.seats)
        ) {
            return license;
        }

        license.seats =
            license.seats.filter(
                seat => seat !== seatId
            );

        return license;

    }

    hasSeat(license, seatId) {

        return Boolean(
            license &&
            Array.isArray(license.seats) &&
            license.seats.includes(seatId)
        );

    }

    countSeats(license) {

        if (
            !license ||
            !Array.isArray(license.seats)
        ) {
            return 0;
        }

        return license.seats.length;

    }

    availableSeats(license) {

        if (!license) {
            return 0;
        }

        const max =
            Number(license.maxDevices) || 0;

        return Math.max(
            0,
            max - this.countSeats(license)
        );

    }

}

module.exports =
    new SeatManagementService();
