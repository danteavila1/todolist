import taskBoard from "./taskBoard";

const newProject = () => {
    const projectForm = document.querySelector("#project-form");
    projectForm.classList.remove("hidden");

    const add = document.querySelector(".add-btn");
    add.addEventListener("click", addProjectForm);

    const cancel = document.querySelector(".cancel-btn");
    cancel.addEventListener("click", hideProjectForm);
}

const addProjectForm = () => {
    alert("hola")
}

const hideProjectForm = () => {
    const projectForm = document.querySelector("#project-form");
    const projectInput = document.querySelector('#project-input');

    projectInput.value = "";
    projectForm.classList.add("hidden");
}


export default newProject;