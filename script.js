const projectSection = document.querySelectorAll(".project");
projectSection.forEach((project) => {
  project.addEventListener("click", () => {
    removeActiveClasses();
    project.classList.add("current");
  });
});

function removeActiveClasses() {
  projectSection.forEach((project) => {
    project.classList.remove("current");
  });
}
