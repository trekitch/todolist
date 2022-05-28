function updateMain(todoArray) {
    const addTodo = document.createElement("div");
    addTodo.textContent = "+ Add Todo";
    const inboxView = document.querySelector(".inboxView");
    const todayView = document.querySelector(".todayView");
    const main = document.querySelector(".main");
    const mainHeader = document.createElement("h2");
    mainHeader.classList.add("main-header");

    inboxView.addEventListener("click", () => {
        main.textContent = "";
        console.log("Clicked inboxView");
        mainHeader.textContent = "Inbox";
        main.appendChild(mainHeader);

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

            todoContainer.append(todoCheckbox, todoTitle, todoDueDate, todoPriority);

            main.appendChild(todoContainer);
        });

        main.appendChild(addTodo);
    });

    todayView.addEventListener("click", () => {
        console.log("clicked todayView");
    });
}

export { updateMain };
