import { createProject, projects } from "./project";

function renderProjectList() {
    const projectList = document.querySelector(".projectList");
    projectList.innerHTML = "";
    projects.forEach((project) => {
        const projectListItem = document.createElement("li");
        projectListItem.textContent = project.Name;
        projectList.append(projectListItem);
    });
}

function addProjectForm() {
    const addProjectButton = document.querySelector(".addProject");

    const form = document.querySelector(".projectForm");
    const projectNameInput = document.querySelector(".projectName");
    const addBtn = document.querySelector(".createProject");
    const cancelBtn = document.querySelector(".cancelProject");

    addProjectButton.addEventListener("click", () => {
        form.style.display = "flex";
    });

    addBtn.addEventListener("click", () => {
        addProjectToList(projectNameInput.value);
        renderProjectList();
        form.style.display = "none";
        form.reset();
    });

    cancelBtn.addEventListener("click", () => {
        form.style.display = "none";
        form.reset();
    });
}

function addProjectToList(projectName) {
    createProject(projectName);
}

export { addProjectForm, renderProjectList };
