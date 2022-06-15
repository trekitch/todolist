const projects = [];

const createProject = (name) => {
    let project = {
        Name: name,
        Todos: [],
    };

    projects.push(project);

    idProjects(projects);
};

function idProjects(projectArr) {
    //adds id number to each item in the array
    projectArr.forEach((element, index) => {
        element.id = index;
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
}

function displayProjects(projectArr) {
    console.log(JSON.parse(JSON.stringify(projectArr)));
}

function displayProjectTodos(projectArr, arrayPosition) {
    projectArr[arrayPosition].Todos.forEach((todo) => {
        console.log(todo);
    });
}

function deleteProject(projectArr, projectID) {
    projectArr.forEach((element, index) => {
        if (element.id === projectID) {
            projectArr.splice(index, 1);
        }
    });

    idProjects(projects);
}

export { createProject, addTodoToProject, projects, displayProjects, displayProjectTodos, deleteProject };
