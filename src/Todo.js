//this module with control CRUD for todos

const todos = [
    { id: 0, Name: "test 1", Due: "09/26/1995", Desc: "test 3", Notes: "test 4", Priority: "Mid", Project: "Inbox" },
    { id: 1, Name: "Another Todo", Due: "09/26/2022", Desc: "Great Description", Notes: "Awesome Notes", Priority: "Mid", Project: "Inbox" },
];

const createTodo = (name, dueDate, description, notes, priority, project) => {
    let todo = {
        Name: name,
        Due: dueDate,
        Desc: description,
        Notes: notes,
        Priority: priority,
        Project: project,
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

function updateTodo(id, todosArray, updatedName, updatedDue, updatedDesc, updatedNotes, updatedPriority) {
    for (const obj of todosArray) {
        if (obj.id === id) {
            obj.Name = updatedName;
            obj.Due = updatedDue;
            obj.Desc = updatedDesc;
            obj.Notes = updatedNotes;
            obj.Priority = updatedPriority;

            break;
        }
    }
}

function deleteTodo(todosArray, id) {
    todosArray.forEach((element, index) => {
        if (element.id === id) {
            todosArray.splice(index, 1);
        }
    });

    idElements(todos);
}

export { todos, createTodo, updateTodo, deleteTodo };
