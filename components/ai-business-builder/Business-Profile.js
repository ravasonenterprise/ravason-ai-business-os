const RavasonBusinessProfile = {

    render() {

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

                                    <option value="retail">
                                        Retail
                                    </option>

                                    <option value="technology">
                                        Technology
                                    </option>

                                    <option value="finance">
                                        Finance
                                    </option>

                                    <option value="education">
                                        Education
                                    </option>

                                    <option value="hospitality">
                                        Hospitality
                                    </option>

                                    <option value="agriculture">
                                        Agriculture
                                    </option>

                                    <option value="other">
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
                                    placeholder="City / Country">

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

                                    <option value="solo">
                                        Solo / Individual
                                    </option>

                                    <option value="small">
                                        Small Business
                                    </option>

                                    <option value="medium">
                                        Medium Business
                                    </option>

                                    <option value="large">
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
                                placeholder="Describe your business...">
                            </textarea>

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
