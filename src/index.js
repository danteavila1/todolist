import taskBoard from "./taskBoard";
import newProject from "./newProject";

const task = document.querySelector('.task');
const addProject = document.querySelector('.add-project-btn');

addProject.addEventListener('click', () => {
    newProject();
}, {once: true})

task.addEventListener('click', () => {
    taskBoard();
})