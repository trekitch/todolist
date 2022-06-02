import "./styles.css";
import { createTodo, todos, updateTodo, deleteTodo } from "./Todo.js";
import { createProject, addTodoToProject, projects, displayProjects, displayProjectTodos, deleteProject } from "./project.js";
import { updateMain } from "./dom.js";

createTodo("Finish todo", "01/01/2022", "test description", "test note", "High");
createTodo("Get rich", "01/30/2023", "test description", "test note", "High");
createTodo("Die trying", "01/30/2023", "test description", "test note", "Low");

updateTodo(1, todos, "Name", "Finish Top");
updateTodo(3, todos, "Priority", "Mid");

createProject("Test Project");
createProject("Test Project 2");
createProject("Test Project 3");

addTodoToProject(todos, 1, projects, 1);
addTodoToProject(todos, 0, projects, 1);

deleteProject(projects, 1);

updateMain(todos);
