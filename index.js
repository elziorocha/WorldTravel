const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal('.offer-image img', {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal('.offer-content .section-subheader, .section-header', {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".offer-content .section-description", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".offer-content h5, .offer-ratings, .offer-btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal('.service-card', {
    ...scrollRevealOption,
    interval: 400,
});

const clientImageArr = [
    "/assets/client-1.jpg",
    "/assets/client-2.jpg",
    "/assets/client-3.jpg",
];

const clientImage = document.querySelector(".client-image img");

function updateSwiperImage(eventName, args) {
    if (eventName === "slideChangeTransitionStart") {
        const index = args && args[0].realIndex;
        clientImage.classList.remove("show");
        clientImage.classList.add("hide");
        clientImage.addEventListener(
            "animationend",
            (e) => {
                clientImage.src = clientImageArr[index];
                clientImage.classList.remove("hide");
                clientImage.classList.add("show");
            },
            {
                once: true,
            }
        );
    }
}

const swiper = new Swiper(".swiper", {
    loop: true,

    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },

    onAny(event, ...args) {
        updateSwiperImage(event, args);
    },
});

const banner = document.querySelector(".banner-wrapper");

Array.from(banner.children).forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
});