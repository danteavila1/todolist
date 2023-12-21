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
    const addProjectBtn = document.querySelector(".add-project-btn");
    if(projectInput == ''){
        alert("You must write something!");
    } else {
    const projectName = document.createElement("div")
    projectName.classList.add("project-name");
    projectName.textContent = projectInput;
    const span = document.createElement("span");
    span.innerHTML="\u00d7";
    addProjectBtn.appendChild(projectName);
    projectName.appendChild(span);
    
    storeProject(projectInput);
    
    }
}

const hideProjectForm = () => {
    const projectForm = document.querySelector("#project-form");
    const projectInput = document.querySelector('#project-input');
    projectInput.value = "";
    projectForm.classList.add("hidden");
}










//projects

let projectsArray = [];

let projectsFromStorage = JSON.parse(localStorage.getItem('projects'))
projectsArray = projectsFromStorage;

const storeProject = (projectInput) => {
    const currentProject = new Project(projectInput);
    projectsArray.push(currentProject);
    console.log(projectsArray);
    localStorage.setItem("projects", JSON.stringify(projectsArray));
}

const getProjects = () => {
    return projectsArray;
}

function Project(name){
    this.name = name;
    this.tasks = [];
}


  





//tasks

function Task (title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
}