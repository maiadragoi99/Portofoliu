
/* 1. MENIUL MOBIL */

const menuButton = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuButton && mainNav) {
    menuButton.addEventListener("click", function () {
        // Deschide sau închide meniul
        mainNav.classList.toggle("is-open");

        // Verifică dacă meniul este deschis
        const isOpen = mainNav.classList.contains("is-open");

        // Actualizează informațiile pentru accesibilitate
        menuButton.setAttribute("aria-expanded", String(isOpen));

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Închide meniul" : "Deschide meniul"
        );
    });

    // Închide meniul după ce alegi o pagină
    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Deschide meniul");
        });
    });
}


/* 2. FORMULARUL DE CONTACT */

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        // Împiedică reîncărcarea paginii
        event.preventDefault();

        // Verifică dacă datele introduse sunt valide
        if (contactForm.checkValidity()) {
            formStatus.textContent =
                "Formularul a fost completat corect!";

            formStatus.style.color = "#70452F";

            // Golește câmpurile formularului
            contactForm.reset();
        } else {
            contactForm.reportValidity();
        }
    });
}
