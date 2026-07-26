const RavasonAIBusinessBuilder = {

    render() {

        return `

            <section class="module-workspace">

                <div class="module-header">

                    <div>

                        <span class="module-eyebrow">
                            RAVASON AI BUSINESS BUILDER
                        </span>

                        <h1>
                            Build Your Business with AI
                        </h1>

                        <p>
                            Create, organize, and grow your business
                            using intelligent business tools.
                        </p>

                    </div>

                    <button class="primary-action">
                        ✨ Start AI Business Analysis
                    </button>

                </div>


                <div class="builder-grid">


                    <article class="builder-card">

    <div class="builder-card-icon">
        💬
    </div>

    <h2>
        AI Business Assistant
    </h2>

    <p>
        Ask Ravason AI questions and receive intelligent
        assistance based on your business profile.
    </p>

    <button
        class="secondary-action"
        data-builder-action="ai-assistant">

        Open AI Assistant

    </button>

</article>
                    <article class="builder-card">

                        <div class="builder-card-icon">
                            🎯
                        </div>

                        <h2>
                            Goals & Objectives
                        </h2>

                        <p>
                            Define your business goals and let AI help
                            create a strategic direction.
                        </p>

                        <button class="secondary-action">
                            Define Goals
                        </button>

                    </article>


                    <article class="builder-card">

                        <div class="builder-card-icon">
                            🤖
                        </div>

                        <h2>
                            AI Recommendations
                        </h2>

                        <p>
                            Receive intelligent recommendations for
                            business growth and improvement.
                        </p>

                        <button class="secondary-action">
                            View Recommendations
                        </button>

                    </article>


                    <article class="builder-card">

                        <div class="builder-card-icon">
                            📊
                        </div>

                        <h2>
                            Business Strategy
                        </h2>

                        <p>
                            Build a structured business strategy
                            powered by AI insights.
                        </p>

                        <button class="secondary-action">
                            Create Strategy
                        </button>

                    </article>

                </div>


                <div
                    id="business-profile-summary"
                    class="business-profile-summary">

                    <h2>
                        Business Profile
                    </h2>

                    <p>
                        No business profile has been created yet.
                    </p>

                    <button
                        class="secondary-action"
                        data-builder-action="business-profile">

                        Create Business Profile

                    </button>

                </div>


                <div class="ai-builder-status">

                    <div class="status-icon">
                        ✨
                    </div>

                    <div>

                        <h3>
                            AI Business Intelligence
                        </h3>

                        <p>
                            Your AI business intelligence engine
                            will appear here as the platform develops.
                        </p>

                    </div>

                    <span class="status-badge">
                        Foundation Ready
                    </span>

                </div>

            </section>

        `;

    }

};

window.RavasonAIBusinessBuilder =
    RavasonAIBusinessBuilder;


document.addEventListener("click", (event) => {

    const action =
        event.target.closest(
            "[data-builder-action]"
        );

    if (!action) {
        return;
    }

    const actionName =
        action.dataset.builderAction;


    if (
        actionName === "business-profile" &&
        window.RavasonRouter
    ) {

        window.RavasonRouter.navigate(
            "business-profile"
        );

    }
if (
    actionName === "ai-assistant" &&
    window.RavasonRouter
) {

    window.RavasonRouter.navigate(
        "ai-assistant"
    );

}
});


RavasonAIBusinessBuilder.loadProfile = function () {

    const profiles =
        RavasonBusinessProfileService.getProfiles();

    const activeProfile =
        RavasonBusinessProfileService.getActiveProfile();

    const summary =
        document.getElementById(
            "business-profile-summary"
        );

    if (!summary) {
        return;
    }


    if (!profiles.length) {

        summary.innerHTML = `

            <div class="profile-summary-header">

                <div>

                    <span class="module-eyebrow">
                        BUSINESS PROFILE
                    </span>

                    <h2>
                        No Business Profiles Yet
                    </h2>

                </div>

            </div>


            <p>
                Create your first business profile to begin.
            </p>


            <button
                class="primary-action"
                data-builder-action="business-profile">

                Create Business Profile

            </button>

        `;

        return;

    }


    summary.innerHTML = `

        <div class="profile-summary-header">

            <div>

                <span class="module-eyebrow">
                    BUSINESS PROFILES
                </span>

                <h2>
                    Your Businesses
                </h2>

            </div>

            <span class="profile-complete-badge">
                ${profiles.length} Profile${profiles.length === 1 ? "" : "s"}
            </span>

        </div>


        <div class="business-profiles-list">

            ${profiles.map(profile => `

                <article
                    class="business-profile-card
                    ${profile.id === activeProfile.id
                        ? "active-profile"
                        : ""}">

                    <div
                        class="profile-summary-header">

                        <div>

                            <span class="module-eyebrow">
                                BUSINESS PROFILE
                            </span>

                            <h2>
                                ${profile.businessName || "Unnamed Business"}
                            </h2>

                        </div>

                        ${
                            profile.id === activeProfile.id
                                ? `
                                    <span
                                        class="profile-complete-badge">
                                        Active
                                    </span>
                                  `
                                : ""
                        }

                    </div>


                    <div
                        class="profile-summary-grid">

                        <div>

                            <span>
                                Industry
                            </span>

                            <strong>
                                ${profile.industry || "Not specified"}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Country
                            </span>

                            <strong>
                                ${profile.country || "Not specified"}
                            </strong>

                        </div>


                        <div>

                            <span>
                                City
                            </span>

                            <strong>
                                ${profile.city || "Not specified"}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Business Size
                            </span>

                            <strong>
                                ${profile.businessSize || "Not specified"}
                            </strong>

                        </div>

                    </div>


                    <div
                        class="profile-description">

                        <span>
                            Description
                        </span>

                        <p>
                            ${profile.description || "No description provided."}
                        </p>

                    </div>


                    <div
                        class="form-actions">

                        ${
                            profile.id !== activeProfile.id
                                ? `
                                    <button
                                        class="primary-action"
                                        data-profile-action="activate"
                                        data-profile-id="${profile.id}">

                                        Use This Profile

                                    </button>
                                  `
                                : ""
                        }


                        <button
                            class="secondary-action"
                            data-profile-action="edit"
                            data-profile-id="${profile.id}">

                            Edit

                        </button>


                        <button
                            class="secondary-action"
                            data-profile-action="delete"
                            data-profile-id="${profile.id}">

                            Delete

                        </button>

                    </div>

                </article>

            `).join("")}

        </div>


        <button
            class="primary-action"
            data-builder-action="create-business-profile">

            Create New Business Profile

        </button>

    `;


    summary
        .querySelectorAll(
            "[data-profile-action]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const action =
                            button.dataset.profileAction;

                        const profileId =
                            button.dataset.profileId;


                        if (
                            action ===
                            "activate"
                        ) {

                            RavasonBusinessProfileService
                                .setActiveProfile(
                                    profileId
                                );

                            RavasonAIBusinessBuilder
                                .loadProfile();

                            return;

                        }


                        if (
                            action ===
                            "edit"
                        ) {

                            RavasonBusinessProfile
                                .createMode =
                                false;

                            RavasonBusinessProfile
                                .editingProfileId =
                                profileId;

                            window.RavasonRouter
                                .navigate(
                                    "business-profile"
                                );

                            return;

                        }


                        if (
                            action ===
                            "delete"
                        ) {

                            const confirmed =
                                window.confirm(
                                    "Delete this business profile?"
                                );

                            if (
                                !confirmed
                            ) {

                                return;

                            }

                            RavasonBusinessProfileService
                                .deleteProfile(
                                    profileId
                                );

                            RavasonAIBusinessBuilder
                                .loadProfile();

                        }

                    }
                );

            }
        );


    const createButton =
        summary.querySelector(
            '[data-profile-action="create"]'
        );


    const createBusinessButton =
        summary.querySelector(
            '[data-builder-action="create-business-profile"]'
        );


    if (
        createBusinessButton
    ) {

        createBusinessButton.addEventListener(
            "click",
            () => {

                RavasonBusinessProfile
                    .createMode =
                    true;

                RavasonBusinessProfile
                    .editingProfileId =
                    null;

                window.RavasonRouter
                    .navigate(
                        "business-profile"
                    );

            }
        );

    }

};
