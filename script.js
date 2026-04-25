/* ------------------------------------ NAVBAR SCROLL LOGIC ------------------------------------ */
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const floatingSocials = document.getElementById('floatingSocials');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scrolling down - hide navbar
    navbar.classList.add('navbar-hidden');
  } else {
    // Scrolling up - show navbar
    navbar.classList.remove('navbar-hidden');
  }
  
  // Show floating buttons when scrolled past 300px
  if (scrollTop > 300) {
    floatingSocials.classList.add('show');
  } else {
    floatingSocials.classList.remove('show');
  }
  
  // Prevent negative scroll values from breaking logic on mobile devices
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});


/* ------------------------------------📦 HORIZONTAL IMAGE SCROLLER & MODAL ------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeModalBtn = document.getElementById("close-modal");

  const scrollers = document.querySelectorAll(".image-scroller");

  scrollers.forEach((scroller) => {
    // 1. Create the images dynamically
    const folder = scroller.getAttribute("data-folder"); 
    const totalImages = parseInt(scroller.getAttribute("data-total"), 10);

    for (let i = 1; i <= totalImages; i++) {
      const img = document.createElement("img");
      img.src = `./Images/${folder}/${i}.png`;
      img.classList.add("scroller-img");
      img.alt = `Project Screenshot ${i}`;

      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = img.src;
        // Fix snapping bug: Lock the background page from scrolling while modal is open
        document.body.style.overflow = "hidden";
      });

      scroller.appendChild(img);
    }

    // 2. Auto-scroll & Hover-scroll logic
    let autoScrollSpeed = 0.5; // Base slow scroll speed
    let currentSpeed = autoScrollSpeed;
    let isHovering = false;
    let isTouchPaused = false; // Flag to temporarily pause auto-scroll on mobile

    // Detect mouse hover position
    scroller.addEventListener("mousemove", (e) => {
      isHovering = true;
      const rect = scroller.getBoundingClientRect();
      const x = e.clientX - rect.left;
      
      // If cursor is on the left 30% of the container, scroll left
      if (x < rect.width * 0.3) {
        currentSpeed = -4; 
      } 
      // If cursor is on the right 30% of the container, scroll right
      else if (x > rect.width * 0.7) {
        currentSpeed = 4; 
      } 
      // Middle 40% rests the scrolling
      else {
        currentSpeed = 0; 
      }
    });

    // Reset to auto-scroll when mouse leaves
    scroller.addEventListener("mouseleave", () => {
      isHovering = false;
    });

    // --- FIX FOR MOBILE SWIPING ---
    // Pause the JavaScript auto-scroller as soon as a finger touches the scroller
    scroller.addEventListener("touchstart", () => {
      isTouchPaused = true;
    }, { passive: true });

    // Wait 2.5 seconds after they stop touching before resuming the auto-scroll
    scroller.addEventListener("touchend", () => {
      setTimeout(() => {
        isTouchPaused = false;
      }, 2500); 
    }, { passive: true });
    
    // Also pause on manual trackpad wheel scrolling (for desktop)
    scroller.addEventListener("wheel", () => {
      isTouchPaused = true;
      clearTimeout(scroller.wheelTimeout);
      scroller.wheelTimeout = setTimeout(() => {
        isTouchPaused = false;
      }, 2500);
    }, { passive: true });


    // Seamless smooth animation loop
    function scrollAnimation() {
      // Only run auto-scroll if the user is NOT actively swiping/touching it
      if (!isTouchPaused) {
        // If the user isn't hovering, run the ping-pong auto scroll
        if (!isHovering) {
          // Check if hit the right edge
          if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth - 1) {
            autoScrollSpeed = -0.5; // Reverse to left
          } 
          // Check if hit the left edge
          else if (scroller.scrollLeft <= 0) {
            autoScrollSpeed = 0.5; // Reverse to right
          }
          currentSpeed = autoScrollSpeed;
        }
        
        // Apply the speed to the scroll bar
        scroller.scrollLeft += currentSpeed;
      }
      
      requestAnimationFrame(scrollAnimation);
    }
    
    // Start the loop for this specific container
    scrollAnimation();
  });

  // Modal close functionality
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    // Restore background scrolling when closing modal
    document.body.style.overflow = ""; 
  });

  modal.addEventListener("click", (event) => {
    // Close modal if user clicks on the dark background
    if (event.target === modal) {
      modal.style.display = "none";
      // Restore background scrolling when closing modal
      document.body.style.overflow = "";
    }
  });
});