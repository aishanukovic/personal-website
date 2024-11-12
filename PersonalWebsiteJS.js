const text = "Software Developer & Social Justice Activist";
const speed = 100;
let index = 0;

function typeWriter() {
    const header = document.getElementById("typewriter");
    if (index < text.length) {
        header.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;