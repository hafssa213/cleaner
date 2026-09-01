const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


document.addEventListener("click", (e) => {

    if (
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        nav.classList.remove("active");
    }

});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});




/* =====================================
   FILTRES
===================================== */

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".before-after-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        // Bouton actif
        filters.forEach(btn => btn.classList.remove("active"));
        filter.classList.add("active");

        const selectedCategory = filter.dataset.filter;

        cards.forEach(card => {

            const category = card.dataset.category;

            if (
                selectedCategory === "all" ||
                category === selectedCategory
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});


/* =====================================
   COMPARATEUR INTERACTIF
===================================== */

const comparison = document.querySelector(".comparison");
const slider = document.querySelector(".slider");
const beforeWrapper = document.querySelector(".before-image-wrapper");
const sliderLine = document.querySelector(".slider-line");
const sliderButton = document.querySelector(".slider-button");


function updateComparison(value) {

    value = Number(value);

    // Image AVANT
    beforeWrapper.style.width = value + "%";

    // Ligne verticale
    sliderLine.style.left = value + "%";

    // Bouton
    sliderButton.style.left = value + "%";
}


/*
    FONCTIONNEMENT :
    - PC : souris
    - Téléphone : doigt
    - tablette : tactile
*/

slider.addEventListener("input", function () {

    updateComparison(this.value);

});


/* Position initiale */

updateComparison(50);


/* =====================================
   BOUTON VOIR PLUS
===================================== */

const moreButton = document.getElementById("moreButton");
const moreGallery = document.getElementById("moreGallery");

moreButton.addEventListener("click", () => {

    const isOpen = moreGallery.classList.contains("show");

    if (!isOpen) {

        moreGallery.classList.add("show");

        moreButton.innerHTML =
            'MASQUER LES RÉALISATIONS';

        setTimeout(() => {

            moreGallery.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    } else {

        moreGallery.classList.remove("show");

        moreButton.innerHTML =
            'VOIR PLUS DE RÉALISATIONS';

    }

}); 





/* =========================
   FORMULAIRE DEVIS → WHATSAPP
========================= */

const form = document.getElementById("quoteForm");
const successMessage = document.getElementById("successMessage");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const telephone = document.getElementById("telephone").value.trim();
        const email = document.getElementById("email").value.trim();
        const ville = document.getElementById("ville").value.trim();
        const service = document.getElementById("service").value;
        const description = document.getElementById("description").value.trim();
        const date = document.getElementById("date").value;

        const message =
`Bonjour CLEANER 👋

Je souhaite demander un devis.

👤 Nom : ${nom}
📞 Téléphone : ${telephone}
📧 E-mail : ${email || "Non renseigné"}
📍 Ville : ${ville || "Non renseignée"}

🧽 Prestation : ${service}

📅 Date souhaitée : ${date || "Non précisée"}

📝 Description :
${description || "Aucune description"}

📸 Je vais envoyer les photos de mon besoin directement dans cette conversation.

Merci !`;

        const whatsappURL =
            `https://wa.me/33750151383?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

        if (successMessage) {
            successMessage.style.display = "block";
        }

        form.reset();

    });

}




/*FAQ*/

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;
        const answer = item.querySelector(".faq-answer");

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }

    });

});






const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");

const galleryImages =
document.querySelectorAll(".extra-card img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        popup.style.display = "flex";

        popupImage.src = image.src;

    });

});

popup.addEventListener("click", () => {

    popup.style.display = "none";

});



