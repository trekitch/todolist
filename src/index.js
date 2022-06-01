import "./styles.css";
import { createTodo, todos, updateTodo, deleteTodo } from "./Todo.js";
import { createProject, addTodoToProject, projects, displayProjects, displayProjectTodos, deleteProject } from "./project.js";
import { updateMain } from "./dom.js";

createTodo("Finish todo", "1/1/2022", "test description", "test note", "high");
createTodo("Get rich", "1/30/2023", "test description", "test note", "high");
createTodo("Die trying", "1/30/2023", "test description", "test note", "low");

updateTodo(1, todos, "Name", "Finish Top");
updateTodo(3, todos, "Priority", "Medium");

createProject("Test Project");
createProject("Test Project 2");
createProject("Test Project 3");

addTodoToProject(todos, 1, projects, 1);
addTodoToProject(todos, 0, projects, 1);

deleteProject(projects, 1);

updateMain(todos);
