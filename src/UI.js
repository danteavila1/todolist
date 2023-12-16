import storeProject from "./Projects";

const newProject = () => {
    const projectForm = document.querySelector("#project-form");
    projectForm.classList.remove("hidden");

    const add = document.querySelector(".add-btn");
    add.addEventListener("click", addProjectForm);

    const cancel = document.querySelector(".cancel-btn");
    cancel.addEventListener("click", hideProjectForm);
}


const addProjectForm = () => {
    const projectInput = document.getElementById("project-input").value;
    const addProjectBtn = document.querySelector(".add-project-btn");
    if(projectInput == ''){
        alert("You must write something!");
    } else{
    const projectName = document.createElement("div")
    projectName.classList.add("project-name");
    projectName.textContent = projectInput;
    const span = document.createElement("span");
    span.innerHTML="\u00d7";
    addProjectBtn.appendChild(projectName);
    projectName.appendChild(span);
    
    storeProject(projectInput);
    loadProjectForm(projectInput);
    }
}

const hideProjectForm = () => {
    const projectForm = document.querySelector("#project-form");
    const projectInput = document.querySelector('#project-input');
    projectInput.value = "";
    projectForm.classList.add("hidden");
}



const loadProjectForm = (projectInput) => {
    document.getElementById('edit-project-form').classList.remove("hidden");
    const projectTitle = document.querySelector(".project-title");
    projectTitle.textContent = projectInput;
}




export default newProject;