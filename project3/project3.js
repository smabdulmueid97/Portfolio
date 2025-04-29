/* ------------------------------------------------📦 PROJECT3 -------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const totalImages = 15;
  const folderPath = "./";
  let currentIndex = 1;

  const imageElement = document.getElementById("carousel-image");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeModalBtn = document.getElementById("close-modal");

  function updateImage(index) {
    const imageSrc = `${folderPath}${index}.png`;
    imageElement.src = imageSrc;
  }

  // Open the modal when image clicked
  imageElement.addEventListener("click", () => {
    modal.style.display = "flex"; // <--- Show the modal
    modalImage.src = imageElement.src;
  });

  // Close the modal on close button click
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none"; // <--- Hide the modal
  });

  // Close modal if click outside the image
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Navigation buttons
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 1 ? currentIndex - 1 : totalImages;
    updateImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < totalImages ? currentIndex + 1 : 1;
    updateImage(currentIndex);
  });

  updateImage(currentIndex);
});
