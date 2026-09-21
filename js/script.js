// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });

}


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


// Observe animation elements

document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});


// ===============================
// MOUSE GLOW EFFECT
// ===============================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "220px";
glow.style.height = "220px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.zIndex = "-1";

glow.style.background =
    "radial-gradient(circle, rgba(217,255,91,0.08), transparent 68%)";

glow.style.transform = "translate(-50%, -50%)";

document.body.appendChild(glow);


window.addEventListener("pointermove", (event) => {

    glow.style.left = event.clientX + "px";

    glow.style.top = event.clientY + "px";

});