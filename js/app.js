$(document).ready(function () {
  // Hero slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  // Project slider
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });

  // Hero slider
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
  });
});

function closeNavbar() {
  if (window.innerWidth <= 992) {
    let navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }
}

// Function to start the animation when the section is in the viewport
function startMilestoneAnimation() {
  const milestoneSection = document.getElementById("milestone");
  const valueDisplays = milestoneSection.querySelectorAll(".display-4");
  const interval = 4000;

  valueDisplays.forEach((valueDisplay) => {
    const endValue = parseInt(valueDisplay.getAttribute("data-val"));
    const duration = interval / endValue;
    let startValue = 0;

    const counter = setInterval(() => {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  });

  // Remove scroll event listener once animation is triggered
  window.removeEventListener("scroll", startMilestoneAnimation);
}

// Add a scroll event listener to start the animation when the section is in view
window.addEventListener("scroll", () => {
  const milestoneSection = document.getElementById("milestone");
  const sectionRect = milestoneSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (sectionRect.top <= windowHeight * 0.75 && sectionRect.bottom >= 0) {
    startMilestoneAnimation();
  }
});

// initialize library
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  preferredCountries: ["ug"],
  separateDialCode: true,
});
