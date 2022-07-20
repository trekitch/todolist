import "./styles.css";
import { createTodo, todos, updateTodo, deleteTodo } from "./Todo.js";
import { createToDoList } from "./todoDom.js";
import { addProjectForm } from "./projectDOM.js";

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

    addTodo.style.display = "block";
});

today.addEventListener("click", () => {
    let newTodoList = todos.filter((todo) => todo.Project === "Today");
    mainHeading.textContent = "Today";
    createToDoList(newTodoList);

    addTodo.style.display = "none";
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

    addTodoForm();

    todoForm.reset();
});

cancel.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submitted form");
    todoForm.style.display = "none";
    addTodo.style.display = "block";
});

window.onload = (event) => {
    mainHeading.textContent = "Inbox";
    createToDoList(todos);
    addProjectForm();
};

function addTodoForm() {
    const todoName = document.getElementById("todoName").value;
    const todoDesc = document.getElementById("todoDesc").value;
    const todoNotes = document.getElementById("todoNotes").value;
    const todoDueDate = document.getElementById("dueDate").value;
    const todoPriority = document.getElementById("priority").value;

    const project = document.querySelector(".main-header").textContent;

    createTodo(todoName, todoDueDate, todoDesc, todoNotes, todoPriority, project);

    let newTodoList = todos.filter((todo) => todo.Project === project);
    createToDoList(newTodoList);
    console.log(newTodoList);
}
