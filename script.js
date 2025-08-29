/* ------------------------------------🌗 THEME TOGGLE ------------------------------------ */
const themeToggleBtn = document.getElementById("theme-toggle");

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
  }
});

themeToggleBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ------------------------------------ Email TOGGLE ------------------------------------ */
// Initialize EmailJS
emailjs.init("ZGdOk4iXwzbOB1_Wz"); // Replace with your public key

// Form submit handler
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_fflfpvk", "template_gh8lqrn", this).then(
      () => {
        alert("Message sent successfully!");
        this.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
  });

// PROJECTS TOGGLE
const toggleButton = document.getElementById("toggle-projects");
const projectsContainer = document.getElementById("projects-container");
const arrowIcon = toggleButton.querySelector("i");

projectsContainer.classList.add("collapsed");

toggleButton.addEventListener("click", function () {
  projectsContainer.classList.toggle("expanded");
  projectsContainer.classList.toggle("collapsed");

  if (projectsContainer.classList.contains("expanded")) {
    arrowIcon.classList.remove("fa-chevron-down");
    arrowIcon.classList.add("fa-chevron-up");
  } else {
    arrowIcon.classList.remove("fa-chevron-up");
    arrowIcon.classList.add("fa-chevron-down");
  }
});

// CERTIFICATES TOGGLE
const toggleButton2 = document.getElementById("toggle-certificates");
const certificatesContainer = document.getElementById("certificates-container");
const arrowIcon2 = toggleButton2.querySelector("i");

certificatesContainer.classList.add("collapsed");

toggleButton2.addEventListener("click", function () {
  certificatesContainer.classList.toggle("expanded");
  certificatesContainer.classList.toggle("collapsed");

  if (certificatesContainer.classList.contains("expanded")) {
    arrowIcon2.classList.remove("fa-chevron-down");
    arrowIcon2.classList.add("fa-chevron-up");
  } else {
    arrowIcon2.classList.remove("fa-chevron-up");
    arrowIcon2.classList.add("fa-chevron-down");
  }
});
