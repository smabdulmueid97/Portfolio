/* ------------------------------------ Email TOGGLE ------------------------------------ */
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

/* ------------------------------------📦 PROJECTS TOGGLE ------------------------------------ */
const toggleButton = document.getElementById("toggle-projects");
const projectsContainer = document.getElementById("projects-container");
const arrowIcon = toggleButton.querySelector("i");

// Initially collapse the project section
projectsContainer.classList.add("collapsed");

toggleButton.addEventListener("click", function () {
  // Toggle visibility classes
  projectsContainer.classList.toggle("expanded");
  projectsContainer.classList.toggle("collapsed");

  // Toggle arrow icon direction
  if (projectsContainer.classList.contains("expanded")) {
    arrowIcon.classList.remove("fa-chevron-down");
    arrowIcon.classList.add("fa-chevron-up");
  } else {
    arrowIcon.classList.remove("fa-chevron-up");
    arrowIcon.classList.add("fa-chevron-down");
  }
});

// Toggle theme and store preference
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light");

  // Save the current theme to localStorage
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
