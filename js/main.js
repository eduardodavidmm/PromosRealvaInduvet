function modal() {

const contactForm = document.querySelector(".contact-form");
const submit = document.querySelector(".submit-form");
const modal = document.querySelector(".modal-wrap");
const close = document.querySelector(".modal-close");

submit.addEventListener("click", (e) => {
        contactForm.reset();
        modal.classList.toggle("display-none");
    }
);

close.addEventListener("click", () => {
    modal.classList.toggle("display-none");
})
}


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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

/*
//Send Email
function sendEmail(params) {
    var tempParams = {
        from_name: document.getElementById("from_name").value,
        emailaddress: document.getElementById("email-address").value,
        phone: document.getElementById("phone").value,
        dni: document.getElementById("dni").value,
        pet_name: document.getElementById("pet-name").value,
        pet_breed: document.getElementById("pet-breed").value,
        age: document.getElementById("age").value,
        invoice: document.getElementById("invoice").value,
        invoiceimage: document.getElementById("my_file").value,
        location: document.getElementById("location").value,
    };
    
    
    emailjs.sendForm('promosrealvainduvet','template_oe07u0d', '#myForm', 'Z7ETfQzsDxRAJKN2f').then(function(res) {
    console.log("SEND", res.status);
})
}*/
