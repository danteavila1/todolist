let projectsArray = [];

const storeProject = (projectName) => {
    const currentProject = new Project(projectName);
    projectsArray.push(currentProject);
    localStorage.setItem("projects", JSON.stringify(projectsArray));
}


function Project(name){
    this._name = name;
}

export default storeProject;