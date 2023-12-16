let projectsArray = [];

const projectsFromStorage = JSON.parse(localStorage.getItem('projects'))
projectsArray = projectsFromStorage;

const storeProject = (projectName) => {
    const currentProject = new Project(projectName);
    projectsArray.push(currentProject);
    localStorage.setItem("projects", JSON.stringify(projectsArray));
    
}


function Project(name){
    this.name = name;
    this.tasks = [];
}

export default storeProject;