/**
 * Ravason Enterprise
 * Platform Identity & Access Management
 *
 * AuthenticationService.js
 */

const UserService =
    require("./UserService");

const PasswordHasher =
    require("./PasswordHasher");

const PasswordPolicyService =
    require("./PasswordPolicyService");

const MFAService =
    require("./MFAService");

const SessionService =
    require("./SessionService");

const LoginAttemptService =
    require("./LoginAttemptService");

const AccountLockoutService =
    require("./AccountLockoutService");

const IdentityAuditService =
    require("./IdentityAuditService");

const IdentityEventService =
    require("./IdentityEventService");

const IdentityNotificationService =
    require("./IdentityNotificationService");


class AuthenticationService {

    authenticate(
        username,
        password,
        options = {}
    ) {

        if (!username) {
            throw new Error(
                "Username is required."
            );
        }

        const user =
            UserService.getAll()
                .find(
                    item =>
                        item.username === username ||
                        item.email === username
                );


        if (!user) {

            LoginAttemptService.recordFailure(
                username
            );

            return null;

        }


        if (
            AccountLockoutService.isLocked &&
            AccountLockoutService.isLocked(user.id)
        ) {

            return null;

        }


        const passwordValid =
            options.validator
                ? options.validator(user)
                : true;


        if (!passwordValid) {

            LoginAttemptService.recordFailure(
                username
            );

            IdentityAuditService.record({
                userId: user.id,
                action: "LOGIN_FAILED",
                outcome: "FAILURE",
                metadata: {
                    reason:
                        "INVALID_PASSWORD"
                }
            });

            return null;

        }


        LoginAttemptService.recordSuccess(
            username
        );


        let mfaVerified = true;


        if (
            options.mfaRequired
        ) {

            mfaVerified =
                MFAService.verifyChallenge(
                    user.id,
                    options.mfaCode
                );

        }


        if (!mfaVerified) {

            return null;

        }


        const session =
            SessionService.create(
                user
            );


        IdentityAuditService.record({
            userId:
                user.id,

            tenantId:
                user.tenantId,

            action:
                "LOGIN_SUCCESS",

            metadata:{
                sessionId:
                    session.token
            }
        });


        IdentityEventService.publish(
            "IDENTITY_LOGIN_SUCCESS",
            {
                userId:
                    user.id
            }
        );


        IdentityNotificationService.send({
            userId:
                user.id,

            subject:
                "Successful Login",

            message:
                "Your account was accessed successfully."
        });


        return {
            user,
            session
        };

    }


    isAuthenticated(
        user
    ) {

        return Boolean(
            user &&
            user.isActive()
        );

    }

}


module.exports =
    new AuthenticationService();
