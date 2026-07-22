document.addEventListener("DOMContentLoaded", () => {

    const mobileMenuButton =
        document.getElementById("mobile-menu-btn");

    const sidebar =
        document.querySelector(".sidebar");

    if (!mobileMenuButton || !sidebar) {
        return;
    }

    mobileMenuButton.addEventListener("click", () => {

        sidebar.classList.toggle("mobile-open");

    });

});
