/* ------------------------------------------------📦 PROJECT1 -------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const totalImages = 12; // total images in ./project1 folder
  const folderPath = "./";
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
