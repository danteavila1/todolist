import taskBoard from "./taskBoard";

const newProject = () => {
    const addProject = document.querySelector('.add-project-btn');
    const newProject = document.createElement('input');
    newProject.classList.add('new-project');
    
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = ("Add");
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = ("Cancel");

    addProject.appendChild(newProject);
    addProject.appendChild(addBtn);
    addProject.appendChild(cancelBtn);

    let input;
    addBtn.addEventListener('click', () => {
        input = newProject.value;
        taskBoard();
    })

    cancelBtn.addEventListener('click', () =>{
        addProject.removeChild(newProject);
        addProject.removeChild(addBtn);
        addProject.removeChild(cancelBtn);
    })

}



export default newProject;