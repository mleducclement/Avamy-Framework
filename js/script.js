const featureSections = document.querySelectorAll(".feature-section");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(entries => animate(entries))

function animate(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("odd-section")) {
        entry.target.classList.add("slideInFromLeft");
        return;
      }
      else {
        entry.target.classList.add("slideInFromRight");
        return;
      }
    }
  });
}

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

featureSections.forEach(el => {
  observer.observe(el);
})

