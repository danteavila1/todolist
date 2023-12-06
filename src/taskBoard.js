
const taskBoard = () => {
const emptyBoard = document.querySelector('.empty-board');
const addTask = document.createElement('button');
addTask.classList.add('add-task');
addTask.textContent = 'Add task';

emptyBoard.appendChild(addTask);
}

export default taskBoard;

