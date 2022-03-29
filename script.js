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
