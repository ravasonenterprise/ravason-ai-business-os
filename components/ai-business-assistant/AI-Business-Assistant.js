const RavasonAIBusinessAssistant = {

    render() {

        const savedProfile =
            localStorage.getItem(
                "ravason_business_profile"
            );

        const profile =
            savedProfile
                ? JSON.parse(savedProfile)
                : {};

        return `

            <section class="module-workspace">

                <div class="module-header">

                    <div>

                        <span class="module-eyebrow">
                            RAVASON AI BUSINESS ASSISTANT
                        </span>

                        <h1>
                            Your AI Business Assistant
                        </h1>

                        <p>
                            Ask questions and get intelligent
                            business guidance based on your profile.
                        </p>

                    </div>

                    <button
                        class="secondary-action"
                        id="back-to-business-builder">

                        ← Back

                    </button>

                </div>


                <div class="ai-assistant-context">

                    <h2>
                        Business Context
                    </h2>

                    <p>
                        ${
                            profile.businessName ||
                            "Your business"
                        }
                    </p>

                    <p>
                        ${
                            profile.industry ||
                            "Industry not set"
                        }
                    </p>

                </div>


                <div
                    class="ai-chat-container"
                    id="ai-chat-container">

                    <div class="ai-message ai-message-assistant">

                        Hello! I am Ravason AI.
                        How can I help you grow your business?

                    </div>

                </div>


                <form
                    class="ai-chat-form"
                    id="ai-chat-form">

                    <input
                        type="text"
                        id="ai-chat-input"
                        placeholder="Ask Ravason AI anything..."
                        autocomplete="off"
                        required>

                    <button
                        type="submit"
                        class="primary-action">

                        Send

                    </button>

                </form>

            </section>

        `;

    },


    init() {

        const form =
            document.getElementById(
                "ai-chat-form"
            );

        const input =
            document.getElementById(
                "ai-chat-input"
            );

        const chat =
            document.getElementById(
                "ai-chat-container"
            );

        const backButton =
            document.getElementById(
                "back-to-business-builder"
            );


        if (backButton) {

            backButton.addEventListener(
                "click",
                () => {

                    window.RavasonRouter.navigate(
                        "business-builder"
                    );

                }

            );

        }


        if (
            form &&
            input &&
            chat
        ) {

            form.addEventListener(
                "submit",
                (event) => {

                    event.preventDefault();

                    const question =
                        input.value.trim();

                    if (!question) {

                        return;

                    }


                    chat.innerHTML += `

                        <div
                            class="ai-message ai-message-user">

                            ${question}

                        </div>

                    `;


                    chat.innerHTML += `

                        <div
                            class="ai-message ai-message-assistant">

                            I understand your question.
                            Ravason AI will analyze your business
                            context and provide guidance.

                        </div>

                    `;


                    input.value = "";

                    chat.scrollTop =
                        chat.scrollHeight;

                }

            );

        }

    }

};


window.RavasonAIBusinessAssistant =
    RavasonAIBusinessAssistant;