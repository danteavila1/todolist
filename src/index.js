const addProject = document.querySelector('.add-project-btn');


addProject.addEventListener('click', () => {
    newProject();
})



//UI

const newProject = () => {
    const projectForm = document.querySelector("#project-form");
    projectForm.classList.remove("hidden");

    const add = document.querySelector(".add-btn");
    add.addEventListener("click", addProjectForm);

    const cancel = document.querySelector(".cancel-btn");
    cancel.addEventListener("click", hideProjectForm);
}


const addProjectForm = () => {
    let projectInput = document.getElementById("project-input").value;
    if(projectInput == ''){
        alert("You must write something!");
    } else {
    const projectName = createProject(projectInput);
    projectInput = null;
    projectsArray.push(projectName);
    saveAndRender();
    }
}

const hideProjectForm = () => {
    const projectForm = document.querySelector("#project-form");
    const projectInput = document.querySelector('#project-input');
    projectInput.value = "";
    projectForm.classList.add("hidden");
}










//projects

const localStorageSelectedProjectId = 'task.selectedProjectId'
const localStorageProjects = 'task.projects';
let projectsArray = JSON.parse(localStorage.getItem(localStorageProjects)) || []
let selectedProjectId = localStorage.getItem(localStorageSelectedProjectId);

const projectsContainer = document.querySelector(".projects-container");
projectsContainer.addEventListener('click', e => {
    if(e.target.classList.contains('project-name')){
        selectedProjectId = e.target.dataset.projectId;
        saveAndRender();
    }
})


const render = () => {
    clearElement(projectsContainer);
    projectsArray.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.dataset.projectId = project.id;
        projectElement.classList.add('project-name');
        projectElement.innerText = project.name;
        const span = document.createElement("span");
        span.innerHTML="\u00d7";
        projectElement.appendChild(span);
        if(project.id == selectedProjectId) {
            projectElement.classList.add('active-project');
        }
        projectsContainer.appendChild(projectElement);
    })
}

const clearElement = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const save = () => {
    localStorage.setItem(localStorageProjects, JSON.stringify(projectsArray));
    localStorage.setItem(localStorageSelectedProjectId, selectedProjectId);
}

const saveAndRender = () => {
    save();
    render();
}

const createProject = (projectName) =>{
    return { id: Date.now().toString(), name: projectName, tasks: [] }
}


const getProjects = () => {
    return projectsArray;
}

render()


