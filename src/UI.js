import storeProject from "./localStorage";

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
    const projectName = document.createElement("div")
    projectName.classList.add("project-name");
    projectName.textContent = projectInput;
    addProjectBtn.appendChild(projectName);
    storeProject(projectInput);
    loadProjectBoard(projectInput);
}

const hideProjectForm = () => {
    const projectForm = document.querySelector("#project-form");
    const projectInput = document.querySelector('#project-input');
    projectInput.value = "";
    projectForm.classList.add("hidden");
}



const loadProjectBoard = (projectInput) => {
    document.getElementById('edit-project-form').classList.remove("hidden");
    const projectTitle = document.querySelector(".project-title");
    projectTitle.textContent = projectInput;
}




export default newProject;