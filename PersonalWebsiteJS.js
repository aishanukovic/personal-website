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