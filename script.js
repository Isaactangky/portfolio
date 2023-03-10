///////////////////////////////////////////////////////////
// Nav SMOOTH Scroll Into View

const navLinks = document.querySelector(".nav__links");
navLinks.addEventListener("click", function (e) {
  e.preventDefault(); // same effect can be achieve by using CSS only
  const target = e.target;

  if (target.classList.contains("nav__link")) {
    const id = target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// POPUP
const popupOverlay = document.querySelectorAll(".popup__overlay");
const detailsBtn = document.querySelectorAll(".btn--details");

popupOverlay.forEach((element) => {
  element.addEventListener("click", (e) => {
    document
      .querySelector(`.popup--${e.target.dataset.popup}`)
      .classList.remove("popup--active");
  });
});

detailsBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(`.popup--${e.target.dataset.popup}`)
      .classList.add("popup--active");
  });
});

///////////////////////////////////////////////////////////
// Heading-2 Animation
const allHeading2 = document.querySelectorAll(".heading-2");
const animateHeading2 = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.add("heading-2--active");
  observer.unobserve(entry.target); // unobserve to reduce js works on the page
};
const sectionObserver = new IntersectionObserver(animateHeading2, {
  root: null,
  threshold: 0,
});
allHeading2.forEach((section) => {
  // section.classList.('section--hidden');
  sectionObserver.observe(section);
});
