const text = "Software Developer, Creative Problem-Solver, & Lifelong Learner";
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

// ===== Projects Modal Data =====
const projects = [
  {
    title: "Phonebook App",
    gif: "Images/project1.gif",
    description: "A searchable, sortable contact directory with basic CRUD operations and styled interface. I analyzed different applicable algorithms in a group, then solo designed and implemented a quicksort algorithm and integrated Bootstrap styling to deliver an interactive user experience with real-time search and detail display.",
    techStack: "JavaScript, HTML, CSS, Bootstrap",
    github: "https://github.com/aishanukovic/phone-book"
  },
  {
    title: "Weather Forecasting App",
    gif: "Images/project2.gif",
    description: "A responsive web app offering real-time and forecasted weather data by city, complete with tabs, map layers, and user-friendly UI. I built the full application from scratch including custom Redux slices for state management and a multi-tab design system with location search and map rendering.",
    techStack: "React, Redux Toolkit, OpenWeatherMap API, Leaflet.js, CSS Modules, Vite",
    github: "https://github.com/aishanukovic/weather-app"
  },
  {
    title: "Mobile Weather Forecasting App",
    gif: "Images/project3.gif",
    description: "A mobile weather app that provides current, hourly, and 5-day forecasts along with an interactive weather map. I refactored and migrated web features to React Native using Expo Router and Redux; implemented dynamic UI with location-based push notifications and offline caching.",
    techStack: "React Native, Expo, Redux Toolkit, OpenWeatherMap API, React Navigation, TypeScript",
    github: "https://github.com/aishanukovic/mobile-weather-app"
  },
  {
    title: "Note-Taking App",
    gif: "Images/project4.gif",
    description: "A full-stack application for authenticated users to create, view, and manage personal notes in a clean dashboard interface. I implemented user authentication, note filtering, EJS templating, and database routes to support a responsive and secure note-keeping system.",
    techStack: "Node.js, Express, MongoDB, EJS, Passport.js, JavaScript, CSS",
    github: "https://github.com/aishanukovic/note-taking-app"
  },
  {
    title: "Capstone Project - Naturopath App",
    gif: "Images/project5.gif",
    description: "An AI-powered health platform that delivers personalized wellness insights through a virtual naturopath interface. I led full-stack development including diagnostic questionnaires, secure user authentication, file upload with OCR (Google Vision API), and interactive chat features; architected web version with MongoDB backend, deployed backend with Render, and frontend with Netlify.",
    techStack: "React, TypeScript, Vite, Tailwind CSS, React Native (Expo), Node.js, Express, MongoDB Atlas, Auth0, Cloudinary, Google Cloud Vision API",
    github: "https://github.com/aishanukovic/capstone-project"
  },
  {
    title: "Personal Website",
    gif: "Images/project6.gif",
    description: "A custom portfolio site showcasing projects, skills, education, and interactive visual effects. I designed and built all sections with animated typewriter headers, modal project displays, icon-based navigation, and mobile-responsive layout enhancements.",
    techStack: "HTML, CSS, JavaScript",
    github: "link"
  }
];

// ===== Project Modal Functions =====
function openModal(index) {
  const modal = document.getElementById('project-modal');
  const { title, gif, description, techStack, github } = projects[index];

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-gif').src = gif;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal-tech-stack').innerHTML = `<span class="tech-label">Tech Stack:</span> ${techStack}`;
  document.getElementById('modal-github-link').innerHTML = `
    <a href="${github}" target="_blank" rel="noopener noreferrer" class="github-button">
      View GitHub Repository
    </a>
  `;

  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('project-modal').style.display = 'none';
}

window.addEventListener('click', function(event) {
  const modal = document.getElementById('project-modal');
  if (event.target === modal) {
    closeModal();
  }
});

const preloadProjectGifs = () => {
  projects.forEach(project => {
    const img = new Image();
    img.src = project.gif;
  });
};

document.addEventListener("DOMContentLoaded", () => {
    preloadProjectGifs();
    
    const modal = document.querySelector("#contactModal");
    const openModalButton = document.querySelector("#openContactModal");
    const form = document.querySelector("#contactForm");
    const statusMessage = document.querySelector("#statusMessage");
    const yearSpan = document.getElementById("current-year");

    emailjs.init("HtpSnc5oBx3DOUc-u");

    modal.style.display = "none";
    statusMessage.classList.remove("show");

    openModalButton.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "block";
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            statusMessage.classList.remove("show");
        }
    });

    document.querySelectorAll(".close-button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        if (modal) {
          modal.style.display = "none";

          const statusMessage = modal.querySelector("#statusMessage");
          if (statusMessage) {
            statusMessage.classList.remove("show");
          }
        }
      });
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

    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    };

    document.querySelectorAll('.toggle-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const details = btn.nextElementSibling;
            const isOpen = details.style.display === 'block';

            details.style.display = isOpen ? 'none' : 'block';

            const textSpan = btn.querySelector('.toggle-text');
            textSpan.textContent = isOpen ? 'Show Details' : 'Hide Details';

            btn.classList.toggle('open', !isOpen);
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1 && document.querySelector(targetId)) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});