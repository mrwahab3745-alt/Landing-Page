const header = document.querySelector(".site-header");
const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");
const navLinks = document.querySelectorAll(".nav-links a");
const revealBlocks = document.querySelectorAll(".reveal");
const contactBtn = document.getElementById("contactBtn");

function setHeaderState() {
    header.classList.toggle("scrolled", window.scrollY > 8);
}

function closeNav() {
    primaryNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
            closeNav();
        }
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        closeNav();
    }
});

window.addEventListener("scroll", setHeaderState);
setHeaderState();

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealBlocks.forEach((block) => revealObserver.observe(block));

contactBtn.addEventListener("click", () => {
    alert("Thanks for your interest in WahabForge. We'll reach out shortly.");
});