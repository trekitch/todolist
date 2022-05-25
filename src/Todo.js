//this module with control CRUD for todos

const todos = [{ Name: "test 1", Due: "test 2", Desc: "test 3", Notes: "test 4", Priority: "test 5" }];

const createTodo = (name, dueDate, description, notes, priority) => {
    let todo = {
        Name: name,
        Due: dueDate,
        Desc: description,
        Notes: notes,
        Priority: priority,
    };
    todos.push(todo);

    idElements(todos);
};

function idElements(todoArray) {
    //adds id number to each item in the array
    todoArray.forEach((element, index) => {
        element.id = index + 1;
    });
}

function updateTodo(id, todosArray, updateElement, updateValue) {
    for (const obj of todosArray) {
        if (obj.id === id) {
            obj[updateElement] = updateValue;

            break;
        }
    }
}

function displayTodo(todoArray) {
    console.log(JSON.parse(JSON.stringify(todoArray)));
    //will call DOM methods to display todos
    //for now is just a console log
}

function deleteTodo(todosArray, id) {
    todosArray.forEach((element, index) => {
        if (element.id === id) {
            todosArray.splice(index, 1);
        }
    });

    idElements(todos);
}

export { todos, createTodo, updateTodo, displayTodo, deleteTodo };
