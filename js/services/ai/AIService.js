const RavasonAIService = {

    ask({
        question,
        businessProfile
    }) {

        const status =
            RavasonAIStatusService.getStatus();


        if (
            !status.available
        ) {

            return {

                success: false,

                response:
                    "AI is not available on your current plan.",

                metadata: {

                    aiMode:
                        "unavailable",

                    plan:
                        status.plan

                }

            };

        }


        if (
            !status.enabled
        ) {

            return {

                success: false,

                response:
                    "AI is currently disabled. " +
                    "Enable AI in your AI settings " +
                    "to use AI-powered assistance.",

                metadata: {

                    aiMode:
                        "disabled",

                    plan:
                        status.plan

                }

            };

        }


        return {

            success: true,

            response:
                "I understand your question. " +
                "Ravason AI will analyze your business " +
                "context and provide guidance.",

            metadata: {

                aiMode:
                    "placeholder",

                businessProfile

            }

        };

    }

};


window.RavasonAIService =
    RavasonAIService;
