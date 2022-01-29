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