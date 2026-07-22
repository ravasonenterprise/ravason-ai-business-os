const RavasonBusinessProfile = {

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
                            BUSINESS PROFILE
                        </span>

                        <h1>
                            Tell Ravason About Your Business
                        </h1>

                        <p>
                            This information helps Ravason AI understand
                            and support your business.
                        </p>

                    </div>

                    <button
                        class="secondary-action"
                        id="back-to-business-builder">

                        ← Back

                    </button>

                </div>


                <form
                    class="business-profile-form"
                    id="business-profile-form">


                    <div class="form-section">

                        <h2>
                            Basic Information
                        </h2>

                        <div class="form-grid">


                            <div class="form-group">

                                <label for="business-name">
                                    Business Name
                                </label>

                                <input
                                    type="text"
                                    id="business-name"
                                    name="businessName"
                                    placeholder="Enter business name"
                                    value="${profile.businessName || ""}"
                                    required>

                            </div>


                            <div class="form-group">

                                <label for="business-industry">
                                    Industry
                                </label>

                                <select
                                    id="business-industry"
                                    name="industry"
                                    required>

                                    <option value="">
                                        Select industry
                                    </option>

                                    <option value="retail" ${profile.industry === "retail" ? "selected" : ""}>
                                        Retail
                                    </option>

                                    <option value="technology" ${profile.industry === "technology" ? "selected" : ""}>
                                        Technology
                                    </option>

                                    <option value="finance" ${profile.industry === "finance" ? "selected" : ""}>
                                        Finance
                                    </option>

                                    <option value="education" ${profile.industry === "education" ? "selected" : ""}>
                                        Education
                                    </option>

                                    <option value="hospitality" ${profile.industry === "hospitality" ? "selected" : ""}>
                                        Hospitality
                                    </option>

                                    <option value="agriculture" ${profile.industry === "agriculture" ? "selected" : ""}>
                                        Agriculture
                                    </option>

                                    <option value="other" ${profile.industry === "other" ? "selected" : ""}>
                                        Other
                                    </option>

                                </select>

                            </div>


                            <div class="form-group">

                                <label for="business-location">
                                    Location
                                </label>

                                <input
                                    type="text"
                                    id="business-location"
                                    name="location"
                                    placeholder="City / Country"
                                    value="${profile.location || ""}">

                            </div>


                            <div class="form-group">

                                <label for="business-size">
                                    Business Size
                                </label>

                                <select
                                    id="business-size"
                                    name="businessSize">

                                    <option value="">
                                        Select size
                                    </option>

                                    <option value="solo" ${profile.businessSize === "solo" ? "selected" : ""}>
                                        Solo / Individual
                                    </option>

                                    <option value="small" ${profile.businessSize === "small" ? "selected" : ""}>
                                        Small Business
                                    </option>

                                    <option value="medium" ${profile.businessSize === "medium" ? "selected" : ""}>
                                        Medium Business
                                    </option>

                                    <option value="large" ${profile.businessSize === "large" ? "selected" : ""}>
                                        Large Enterprise
                                    </option>

                                </select>

                            </div>

                        </div>

                    </div>


                    <div class="form-section">

                        <h2>
                            Business Description
                        </h2>

                        <div class="form-group">

                            <label for="business-description">
                                What does your business do?
                            </label>

                            <textarea
                                id="business-description"
                                name="description"
                                rows="6"
                                placeholder="Describe your business...">${profile.description || ""}</textarea>

                        </div>

                    </div>


                    <div class="form-actions">

                        <button
                            type="submit"
                            class="primary-action">

                            Save Business Profile

                        </button>

                    </div>


                    <div
                        id="business-profile-message"
                        class="form-message"
                        hidden>
                    </div>


                </form>

            </section>

        `;

    },


    init() {

        const form =
            document.getElementById(
                "business-profile-form"
            );

        const backButton =
            document.getElementById(
                "back-to-business-builder"
            );

        const message =
            document.getElementById(
                "business-profile-message"
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


        if (form) {

            form.addEventListener(
                "submit",
                (event) => {

                    event.preventDefault();

                    const formData =
                        new FormData(form);

                    const businessProfile = {

                        businessName:
                            formData.get("businessName"),

                        industry:
                            formData.get("industry"),

                        location:
                            formData.get("location"),

                        businessSize:
                            formData.get("businessSize"),

                        description:
                            formData.get("description")

                    };


                    localStorage.setItem(

                        "ravason_business_profile",

                        JSON.stringify(
                            businessProfile
                        )

                    );


                    if (message) {

                        message.hidden = false;

                        message.textContent =
                            "Business profile saved successfully.";

                    }

                    console.log(
                        "Business profile saved:",
                        businessProfile
                    );

                }
            );

        }

    }

};

window.RavasonBusinessProfile =
    RavasonBusinessProfile;
