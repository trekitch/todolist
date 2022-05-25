const projects = [];

const createProject = (name) => {
    let project = {
        Name: name,
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
    const todoID = todoArray[todoItemPosition].id;
    const todoItem = todoArray[todoItemPosition];
    //take a given todo and add it to a project
    projectArray.forEach((project) => {
        if (project.id === projectId) {
            project[todoID] = todoItem;
        }
    });

    console.log(projects);
}

export { createProject, addTodoToProject, projects };
