/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

    });

});


/* =========================================
   MEDICINE SEARCH
========================================= */

const searchInput =
    document.getElementById("medicineSearch");

const medicineCards =
    document.querySelectorAll(".medicine-card");

const noResults =
    document.getElementById("noResults");


if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchValue =
            this.value.toLowerCase().trim();

        let visibleCount = 0;


        medicineCards.forEach(card => {

            const medicineName =
                card.dataset.name.toLowerCase();

            if (medicineName.includes(searchValue)) {

                card.style.display = "block";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        if (noResults) {

            if (visibleCount === 0) {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }

    });

}


/* =========================================
   MEDICINE CATEGORY FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;


        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        let visibleCount = 0;


        medicineCards.forEach(card => {

            const cardCategory =
                card.dataset.category;


            if (
                category === "all" ||
                cardCategory === category
            ) {

                card.style.display = "block";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        if (noResults) {

            if (visibleCount === 0) {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (
            !name ||
            !email ||
            !phone ||
            !subject ||
            !message
        ) {

            formMessage.textContent =
                "Please fill in all fields.";

            formMessage.style.color = "#c0392b";

            return;

        }


        formMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        formMessage.style.color = "#238346";


        contactForm.reset();

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElements =
    document.querySelectorAll(".current-year");

yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});