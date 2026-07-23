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

    ${
        window.RavasonIndustryDatabase
            .map(industry => `
                <option
                    value="${industry}"
                    ${profile.industry === industry ? "selected" : ""}>
                    ${industry}
                </option>
            `)
            .join("")
    }

</select>

                            </div>


                            <div class="form-group">

                                <label for="business-country">
                                    Country
                                </label>

                                <select
                                    id="business-country"
                                    name="country"
                                    required>

                                    <option value="">
                                        Select country
                                    </option>

                                    ${
                                        window.RavasonBusinessOptions
                                             .countries
                                            .map(country => `
                                                <option
                                                    value="${country}"
                                                    ${profile.country === country ? "selected" : ""}>
                                                    ${country}
                                                </option>
                                            `)
                                            .join("")
                                    }

                                </select>

                            </div>


                            <div class="form-group">

                                <label for="business-city">
                                    City
                                </label>

                                <input
                                    type="text"
                                    id="business-city"
                                    name="city"
                                    placeholder="Search or enter city"
                                    value="${profile.city || ""}"
                                    autocomplete="off"
                                    required>

                                <div
                                    id="city-suggestions"
                                    class="city-suggestions"
                                    hidden>
                                </div>

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

            const countrySelect =
                document.getElementById(
                    "business-country"
                );

            const cityInput =
                document.getElementById(
                    "business-city"
                );

            const citySuggestions =
                document.getElementById(
                    "city-suggestions"
                );


            if (
                countrySelect &&
                cityInput &&
                citySuggestions
            ) {

                cityInput.addEventListener(
                    "input",
                    () => {

                        const country =
                            countrySelect.value;

                        const query =
                            cityInput.value
                                .trim()
                                .toLowerCase();

                        const cities =
                            window.RavasonCityDatabase[
                                country
                            ] || [];

                        const matches =
                            cities.filter(
                                city =>
                                    city
                                        .toLowerCase()
                                        .includes(query)
                            );

                        if (
                            !query ||
                            !matches.length
                        ) {

                            citySuggestions.hidden =
                                true;

                            citySuggestions.innerHTML =
                                "";

                            return;

                        }

                        citySuggestions.innerHTML =
                            matches
                                .map(city => `
                                    <button
                                        type="button"
                                        class="city-suggestion"
                                        data-city="${city}">
                                        ${city}
                                    </button>
                                `)
                                .join("");

                        citySuggestions.hidden =
                            false;


                        citySuggestions
                            .querySelectorAll(
                                ".city-suggestion"
                            )
                            .forEach(
                                button => {

                                    button.addEventListener(
                                        "click",
                                        () => {

                                            cityInput.value =
                                                button.dataset.city;

                                            citySuggestions.hidden =
                                                true;

                                        }
                                    );

                                }
                            );

                    }
                );


                countrySelect.addEventListener(
                    "change",
                    () => {

                        cityInput.value =
                            "";

                        citySuggestions.hidden =
                            true;

                        citySuggestions.innerHTML =
                            "";

                    }
                );

            }


            form.addEventListener(
                "submit",
                (event) => {

                    event.preventDefault();

                    const formData =
                        new FormData(form);

                    const businessName =
                        formData.get("businessName").trim();

                    const industry =
                        formData.get("industry");

                    const country =
                        formData.get("country");

                    const city =
                        formData.get("city").trim();

                    const businessSize =
                        formData.get("businessSize");


                    if (!businessName) {

                        alert(
                            "Please enter your business name."
                        );

                        return;

                    }


                    if (!industry) {

                        alert(
                            "Please select your industry."
                        );

                        return;

                    }


                    if (!country) {

                        alert(
                            "Please select your country."
                        );

                        return;

                    }


                    if (!city) {

                        alert(
                            "Please enter your city."
                        );

                        return;

                    }


                    if (!businessSize) {

                        alert(
                            "Please select your business size."
                        );

                        return;

                    }


                    const businessProfile = {

                        businessName: businessName,

                        industry: industry,

                        country: country,

                        city: city,

                        businessSize: businessSize,

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
