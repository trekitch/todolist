import "./styles.css";
import { createTodo, todos, updateTodo, deleteTodo } from "./Todo.js";
import { createProject, addTodoToProject, projects, displayProjects, displayProjectTodos, deleteProject } from "./project.js";
import { createToDoList, displayDetails } from "./todoDom.js";
import { addProjectForm, renderProjectList } from "./projectDOM.js";

const mainHeading = document.querySelector(".main-header");

const inbox = document.querySelector(".inbox-view");
const today = document.querySelector(".today-view");

const addTodo = document.querySelector(".add-todo");
const todoForm = document.querySelector(".add-todo-form");
const cancel = document.querySelector(".cancel");

inbox.addEventListener("click", () => {
    let newTodoList = todos.filter((todo) => todo.Project === "Inbox");
    mainHeading.textContent = "Inbox";
    createToDoList(newTodoList);

    displayDetails();
});

today.addEventListener("click", () => {
    let newTodoList = todos.filter((todo) => todo.Project === "Today");
    mainHeading.textContent = "Today";
    createToDoList(newTodoList);
});

addTodo.addEventListener("click", () => {
    todoForm.style.display = "block";
    addTodo.style.display = "none";
});

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted form");
    todoForm.style.display = "none";
    addTodo.style.display = "block";
});

cancel.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submitted form");
    todoForm.style.display = "none";
    addTodo.style.display = "block";
});
