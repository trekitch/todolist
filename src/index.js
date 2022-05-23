import { createTodo, displayTodo, todos, updateTodo, deleteTodo } from "./Todo.js";

createTodo("Finish todo", "1/1/2022", "test description", "test note", "high");
createTodo("Get rich", "1/30/2023", "test description", "test note", "high");
createTodo("Die trying", "1/30/2023", "test description", "test note", "low");

displayTodo(todos);

updateTodo(1, todos, "Name", "Finish Top");
updateTodo(3, todos, "Priority", "Medium");

displayTodo(todos);

deleteTodo(todos, 4);

displayTodo(todos);

deleteTodo(todos, 1);

displayTodo(todos);
