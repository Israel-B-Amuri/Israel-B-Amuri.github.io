const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
  project.addEventListener("click", () => {
    removeActiveClasses();
    project.classList.add("current");
  });
});

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

// Navigation scrollings

const navigation = document.querySelectorAll(".highlight");

navigation.forEach((item) => {
  item.addEventListener("click", function () {
    let navLink = document.getElementById(item.getAttribute("data-link"));
    navLink.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
