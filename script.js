/* ------------------------------------------------📦 PROJECT1 -------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const totalImages = 10; // total images in ./project1 folder
  const folderPath = "./project1";
  let currentIndex = 1;

  const imageElement = document.getElementById("carousel-image");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  function updateImage(index) {
    imageElement.src = `${folderPath}/${index}.png`;
  }

  prevBtn.addEventListener("click", () => {
    // Loop to the last image if current index is 1
    currentIndex = currentIndex > 1 ? currentIndex - 1 : totalImages;
    updateImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    // Loop to the first image if current index is the last
    currentIndex = currentIndex < totalImages ? currentIndex + 1 : 1;
    updateImage(currentIndex);
  });

  // Initialize the carousel with the first image
  updateImage(currentIndex);
});

/* ------------------------------------------------📦 PROJECT2 ------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const totalImages = 10;
  const folderPath = "./project2";
  let currentIndex = 1;

  const imageElement = document.getElementById("carousel-image");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  function updateImage(index) {
    imageElement.src = `${folderPath}/${index}.png`;
  }

  prevBtn.addEventListener("click", () => {
    // Loop to the last image if current index is 1
    currentIndex = currentIndex > 1 ? currentIndex - 1 : totalImages;
    updateImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    // Loop to the first image if current index is the last
    currentIndex = currentIndex < totalImages ? currentIndex + 1 : 1;
    updateImage(currentIndex);
  });

  // Initialize the carousel with the first image
  updateImage(currentIndex);
});

/* ------------------------------------------------📦 PROJECT3 ------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const totalImages = 10;
  const folderPath = "./project3";
  let currentIndex = 1;

  const imageElement = document.getElementById("carousel-image");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  function updateImage(index) {
    imageElement.src = `${folderPath}/${index}.png`;
  }

  prevBtn.addEventListener("click", () => {
    // Loop to the last image if current index is 1
    currentIndex = currentIndex > 1 ? currentIndex - 1 : totalImages;
    updateImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    // Loop to the first image if current index is the last
    currentIndex = currentIndex < totalImages ? currentIndex + 1 : 1;
    updateImage(currentIndex);
  });

  // Initialize the carousel with the first image
  updateImage(currentIndex);
});

/* ------------------------------------------------📦 PROJECT4 ------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const totalImages = 10;
  const folderPath = "./project4";
  let currentIndex = 1;

  const imageElement = document.getElementById("carousel-image");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  function updateImage(index) {
    imageElement.src = `${folderPath}/${index}.png`;
  }

  prevBtn.addEventListener("click", () => {
    // Loop to the last image if current index is 1
    currentIndex = currentIndex > 1 ? currentIndex - 1 : totalImages;
    updateImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    // Loop to the first image if current index is the last
    currentIndex = currentIndex < totalImages ? currentIndex + 1 : 1;
    updateImage(currentIndex);
  });

  // Initialize the carousel with the first image
  updateImage(currentIndex);
});

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
