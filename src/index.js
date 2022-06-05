import "./styles.css";
import { createTodo, todos, updateTodo, deleteTodo } from "./Todo.js";
import { createProject, addTodoToProject, projects, displayProjects, displayProjectTodos, deleteProject } from "./project.js";
import { updateMain } from "./todoDom.js";
import { addProjectForm, renderProjectList } from "./projectDOM.js";

createTodo("Finish todo", "01/01/2022", "test description", "test note", "High");
createTodo("Get rich", "01/30/2023", "test description", "test note", "High");
createTodo("Die trying", "01/30/2023", "test description", "test note", "Low");

updateTodo(1, todos, "Finish TOP", "09/26/1995", "better desc", "better Notes", "Low");

createProject("Test Project");
createProject("Test Project 2");
createProject("Test Project 3");

addTodoToProject(todos, 1, projects, 1);
addTodoToProject(todos, 0, projects, 1);

addTodoToProject(todos, 1, projects, 2);
addTodoToProject(todos, 0, projects, 2);
addTodoToProject(todos, 2, projects, 2);

addTodoToProject(todos, 2, projects, 3);

updateMain(todos);
addProjectForm();
renderProjectList();
