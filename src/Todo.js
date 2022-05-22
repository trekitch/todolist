//this module with control CRUD for todos

let todos = [];

const createTodo = (name, dueDate, description, notes, priority) => {
    let todo = {
        Name: name,
        Due: dueDate,
        Desc: description,
        Notes: notes,
        Priority: priority,
    };

    todos.push(todo);

    return console.log(todos);
};

function updateTodo(todos) {}

function displayTodo() {}

function deleteTodo() {}

export { createTodo, updateTodo, displayTodo, deleteTodo };
