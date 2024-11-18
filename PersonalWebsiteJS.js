const text = "Software Developer & Social Justice Activist";
const speed = 100;
let index = 0;

function typeWriter() {
    const header = document.getElementById("typewriter");
    if (index < text.length) {
        header.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    };
};

window.onload = typeWriter;

let scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    };
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector("#contactModal");
    const openModalButton = document.querySelector("#openContactModal");
    const closeButton = document.querySelector(".close-button");
    const form = document.querySelector("#contactForm");
    const statusMessage = document.querySelector("#statusMessage");

    emailjs.init("HtpSnc5oBx3DOUc-u");

    modal.style.display = "none";
    statusMessage.classList.remove("show");

    openModalButton.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        statusMessage.classList.remove("show");
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            statusMessage.classList.remove("show");
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        statusMessage.classList.remove("show");

        emailjs.sendForm("service_m3mwqyk", "template_z4oje09", form)
            .then(() => {
                statusMessage.textContent = "Your message has been sent!";
                statusMessage.classList.add("show");
                form.reset();
            })
            .catch((error) => {
                statusMessage.textContent = "An error occurred. Please try again.";
                statusMessage.classList.add("show");
                console.error("EmailJS error:", error);
            });
    });
});