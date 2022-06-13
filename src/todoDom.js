import { createTodo, todos, updateTodo, deleteTodo } from "./Todo.js";
import { format } from "date-fns";

//createtodos accepts array of todo objects
//and makes div elements for each object
function createTodosElement(object, index) {
    const todoContainer = document.createElement("div");
    const todoList = document.querySelector(".todo-list");
    todoContainer.classList.add("todo-container");
    const toDoName = document.createElement("p");
    const toDoDue = document.createElement("p");
    const toDoPriority = document.createElement("p");
    const toDoRemove = document.createElement("p");
    toDoRemove.textContent = "Remove";
    toDoRemove.classList.add("removeTodo");

    toDoName.textContent = object.Name;
    toDoDue.textContent = object.Due;
    toDoPriority.textContent = object.Priority;
    todoContainer.setAttribute("data-index", index);
    todoContainer.append(toDoName, toDoDue, toDoPriority, toDoRemove);
    todoContainer.classList.add("todoItem");
    todoList.appendChild(todoContainer);
    todoContainer.insertAdjacentElement("afterend", displayTodoDetails(object));
}

function createToDoList(todoArray) {
    const parentDiv = document.querySelector(".todo-list");
    parentDiv.innerHTML = "";
    todoArray.forEach((element, index) => {
        createTodosElement(element, index);
    });

    document.querySelectorAll(".removeTodo").forEach((todo) => {
        todo.addEventListener("click", (e) => {
            const todoIndex = e.target.parentElement.getAttribute("data-index");
            console.log(todoIndex);
            removeToDo(todoIndex);

            e.stopPropagation();
        });
    });

    displayDetails();
}

function displayDetails() {
    const todoItems = document.querySelectorAll(".todo-container");
    todoItems.forEach((todoItem) => {
        todoItem.addEventListener("click", (e) => {
            if (todoItem.nextSibling.style.display == "none") {
                todoItem.nextSibling.style.display = "block";
            } else {
                todoItem.nextSibling.style.display = "none";
            }
        });
    });
}

function removeToDo(elementID) {
    deleteTodo(todos, parseInt(elementID));
    console.log(todos);
    createToDoList(todos);
}

function displayTodoDetails(todoArrayElement) {
    const selectOptions = ["Low", "Mid", "High", "🔥🔥🔥"];
    const detailContainer = document.createElement("div");
    detailContainer.innerHTML = "";
    const detailTitle = document.createElement("h3");
    const detailHeader = document.createElement("div");
    const detailEdit = document.createElement("p");
    detailEdit.textContent = "Edit";
    detailEdit.classList.add("edit");

    detailHeader.append(detailTitle, detailEdit);

    detailHeader.classList.add("details-title");

    detailContainer.append(detailHeader);

    detailTitle.textContent = "Details";
    detailContainer.classList.add("todo-details");
    detailContainer.style.display = "none";
    for (const property in todoArrayElement) {
        let field;
        if (property == "id") {
            continue;
        } else if (property == "Desc") {
            field = document.createElement("textarea");
            field.value = todoArrayElement[property];
        } else if (property == "Due") {
            field = document.createElement("input");
            field.setAttribute("type", "date");
            let date = format(new Date(todoArrayElement[property]), "yyyy-MM-dd");
            field.value = date;
        } else if (property == "Priority") {
            field = document.createElement("select");
            for (let i = 0; i < selectOptions.length; i++) {
                let option = document.createElement("option");
                option.value = selectOptions[i];
                option.text = selectOptions[i];
                field.appendChild(option);
            }
            field.value = todoArrayElement[property];
        } else {
            field = document.createElement("input");
            field.value = todoArrayElement[property];
        }
        const label = document.createElement("label");
        label.textContent = `${property}:`;

        field.disabled = true;
        field.classList.add(property);
        detailContainer.append(label, field);
    }

    detailEdit.addEventListener("click", () => {
        editTodo(detailContainer, todoArrayElement);
    });

    return detailContainer;
}

function editTodo(detailContainer, element) {
    const detailEdit = detailContainer.querySelector(".edit");
    let list = detailContainer.children;
    let listArr = Array.from(list);

    if (detailEdit.textContent === "Save") {
        listArr.forEach((item) => (item.disabled = true));
        detailEdit.textContent = "Edit";

        const updateName = detailContainer.querySelector(".Name").value;
        const updateDue = detailContainer.querySelector(".Due").value;
        const updateDesc = detailContainer.querySelector(".Desc").value;
        const updateNotes = detailContainer.querySelector(".Notes").value;
        const updatePriority = detailContainer.querySelector(".Priority").value;

        updateTodo(element.id, todos, updateName, updateDue, updateDesc, updateNotes, updatePriority);

        console.log(todos);
        createToDoList(todos);
    } else {
        listArr.forEach((item) => (item.disabled = false));

        detailEdit.textContent = "Save";
    }
}

export { createToDoList, displayDetails, removeToDo };
