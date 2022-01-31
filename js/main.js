const contactForm = document.querySelector(".contact-form");
const submit = document.querySelector(".submit-form");
const modal = document.querySelector(".modal-wrap");
const close = document.querySelector(".modal-close");

submit.addEventListener("click", (e) => {
    e.preventDefault();
        contactForm.reset();
        modal.classList.toggle("display-none");
    }
);

close.addEventListener("click", () => {
    modal.classList.toggle("display-none");
})

//mobile nav

const openIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times-circle");
const mobileBG = document.querySelector(".mobile-bg");
const mobileNav = document.querySelector(".mobile-nav");

openIcon.addEventListener("click" , () => {
    mobileBG.classList.toggle("display-none");
    mobileNav.classList.remove("slide-out");
    mobileNav.classList.toggle("slide-in");
    openIcon.classList.toggle("display-none");
});

closeIcon.addEventListener("click" , () => {
    setTimeout(() => {
        mobileBG.classList.toggle("display-none");
        openIcon.classList.toggle("display-none");
    }, 500);
    mobileNav.classList.toggle("slide-in");
    mobileNav.classList.toggle("slide-out");
});