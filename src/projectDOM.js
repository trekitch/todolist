import { createProject, projects } from "./project";
import { createToDoList } from "./todoDom.js";
import { createTodo, todos, updateTodo, deleteTodo } from "./Todo.js";

function renderProjectList() {
    const projectList = document.querySelector(".projectList");
    projectList.innerHTML = "";
    projects.forEach((project) => {
        const projectListItem = document.createElement("li");
        const projectName = document.createElement("div");
        const projectRemove = document.createElement("div");
        projectName.textContent = project.Name;
        projectRemove.textContent = "Delete";
        projectListItem.classList.add("project");
        projectListItem.setAttribute("data-index", project.id);
        projectListItem.append(projectName, projectRemove);
        projectList.append(projectListItem);
    });

    const projectViews = document.querySelectorAll(".project");
    projectViews.forEach((project) => {
        project.addEventListener("click", (e) => {
            if (e.target.textContent === "Delete") {
                console.log(e.target.parentNode.getAttribute("data-index"));
                console.log(projects);
                console.log(todos);
                let newTodoList = todos.filter((todo) => todo.Project === projects.Name);
                console.log(newTodoList);
            } else {
                const projectIndex = project.getAttribute("data-index");
                projectView(projects[projectIndex]);
            }
        });
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

function projectView(project) {
    const mainHeader = document.querySelector(".main-header");
    mainHeader.textContent = project.Name;
    let newTodoList = todos.filter((todo) => todo.Project === project.Name);
    createToDoList(newTodoList);
}

function removeProject(project) {}

export { addProjectForm, renderProjectList };
