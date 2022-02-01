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


//Send Email

function sendEmail(params) {
    var tempParams = {
        from_name: document.getElementById("full-name").value,
        full_name: document.getElementById("full-name").value,
        emailaddress: document.getElementById("email-address").value,
        phone: document.getElementById("phone").value,
        dni: document.getElementById("dni").value,
        pet_name: document.getElementById("pet-name").value,
        pet_breed: document.getElementById("pet-breed").value,
        age: document.getElementById("age").value,
        invoice: document.getElementById("invoice").value,
    };
    
    emailjs.send('service_coyy234','template_heqa6ek', tempParams).then(function(res) {
        console.log("SEND", res.status);
    })
}