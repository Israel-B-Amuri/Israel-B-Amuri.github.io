// navigation on click scrolling

const navScrolling = document.querySelectorAll("highlight");

navScrolling.addEventListener("click", function () {
  window.scrollTo({
    top: 10,
    left: 0,
    behavior: "smooth",
  });
});

// project onclick annimation

function removeActiveClasses() {
  projects.forEach((project) => {
    project.classList.remove("current");
  });
}

/*  a function that access the elements
 within the nav-bar on mobile phones and tablets*/

const navBar = document.querySelector(".nav-list");
const navButton = document.querySelector(".menu-button");

navButton.addEventListener("click", () => {
  const visible = navBar.getAttribute("data-visible");

  if (visible === "false") {
    navBar.setAttribute("data-visible", true);
    navButton.setAttribute("aria-expanded", true);
  } else {
    navBar.setAttribute("data-visible", false);
    navButton.setAttribute("aria-expanded", false);
  }
});

//Scroll button codes

const scrollButton = document.querySelector("#scroll-button");

scrollButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
