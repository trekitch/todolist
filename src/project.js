const projects = [];

const createProject = (name) => {
    let project = {
        Name: name,
        Todos: [],
    };

    projects.push(project);

    console.log(projects);

    idProjects(projects);
};

function idProjects(projectArr) {
    //adds id number to each item in the array
    projectArr.forEach((element, index) => {
        element.id = index + 1;
    });
}

function addTodoToProject(todoArray, todoItemPosition, projectArray, projectId) {
    const todoItem = todoArray[todoItemPosition];
    //take a given todo and add it to a project
    projectArray.forEach((project) => {
        if (project.id === projectId) {
            project.Todos.push(todoItem);
        }
    });
    projects[0].Todos.forEach((todo) => {
        console.log(todo);
    });
}

export { createProject, addTodoToProject, projects };
