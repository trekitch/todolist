import { createTodo, displayTodo, todos, updateTodo, deleteTodo } from "./Todo.js";

const main = document.querySelector(".main");

const todoView = document.createElement("div");
const addTodo = document.createElement("div");
addTodo.textContent = "+ Add Todo";

function updateMain(todoArray) {
    const inboxView = document.querySelector(".inboxView");
    const todayView = document.querySelector(".todayView");
    const mainHeader = document.createElement("h2");

    const formContainer = document.createElement("div");
    mainHeader.classList.add("main-header");

    inboxView.addEventListener("click", () => {
        main.textContent = "";
        console.log("Clicked inboxView");
        mainHeader.textContent = "Inbox";
        main.appendChild(mainHeader);
        main.appendChild(todoView);
        addTodoDom(todoArray);
    });

    todayView.addEventListener("click", () => {
        console.log("clicked todayView");
    });

    addTodo.addEventListener("click", () => {
        formContainer.classList.add("todoForm");
        formContainer.innerHTML = `
        <form action="" class="">
        <input type="text" name="todoName" id="todoName" placeholder="Title"/>
        <textarea name="todoDesc" id="todoDesc" cols="30" rows="4" placeholder="Description"></textarea>
        <textarea name="todoNotes" id="todoNotes" cols="30" rows="2" placeholder="Notes"></textarea>
        <input type="date" name="dueDate" id="dueDate" />
        <select name="priority" id="priority">
            <option value="Low">Low</option>
            <option value="Mid">Mid</option>
            <option value="High">High</option>
            <option value="&#128293;&#128293;&#128293;">&#128293;&#128293;&#128293;</option>
        </select>
        <div class="buttonContainer">
            <button class="submit" type="button">Submit</button>
            <button class="cancel" type="button">Cancel</button>
        </div>
    </form>
        `;
        addTodo.style.display = "none";
        todoView.append(formContainer);

        const cancelForm = document.querySelector(".cancel");
        cancelForm.addEventListener("click", () => {
            formContainer.innerHTML = "";
            addTodo.style.display = "block";
        });

        const submitForm = document.querySelector(".submit");
        submitForm.addEventListener("click", () => {
            const toDoName = document.getElementById("todoName").value;
            const toDoDate = document.getElementById("dueDate").value;
            const toDoPriority = document.getElementById("priority").value;
            const toDoDesc = document.getElementById("todoDesc").value;
            const toDoNotes = document.getElementById("todoNotes").value;
            createTodo(toDoName, toDoDate, toDoDesc, toDoNotes, toDoPriority);
            addTodoDom(todos);
            addTodo.style.display = "block";
        });
    });
}

function addTodoDom(todoArray) {
    todoView.innerHTML = "";
    todoArray.forEach((element) => {
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todoItem");
        const todoCheckbox = document.createElement("input");
        todoCheckbox.setAttribute("type", "checkbox");
        const todoTitle = document.createElement("p");
        todoTitle.textContent = element.Name;
        const todoDueDate = document.createElement("p");
        todoDueDate.textContent = element.Due;
        const todoPriority = document.createElement("p");
        todoPriority.textContent = element.Priority;
        const todoRemove = document.createElement("p");
        todoRemove.textContent = "Remove";
        todoRemove.classList.add("removeTodo");
        todoContainer.setAttribute("data-index", element.id);

        todoContainer.append(todoCheckbox, todoTitle, todoDueDate, todoPriority, todoRemove);

        todoView.appendChild(todoContainer);
    });

    todoView.appendChild(addTodo);

    document.querySelectorAll(".removeTodo").forEach((todo) => {
        todo.addEventListener("click", (e) => {
            const todoIndex = e.target.parentElement.getAttribute("data-index");
            console.log(todoIndex);
            removeToDoDOM(todoIndex);
        });
    });
}

function removeToDoDOM(elementID) {
    deleteTodo(todos, parseInt(elementID));
    addTodoDom(todos);
    console.log(todos);
}

export { updateMain };
