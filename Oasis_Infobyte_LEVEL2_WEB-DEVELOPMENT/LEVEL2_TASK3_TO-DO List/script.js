const saveBtn = document.getElementById('save-btn');
const todoList = document.getElementById('todo-list');
const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-desc');

saveBtn.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (title === "") {
        alert("Please fill out the Title field.");
        return;
    }

    createTask(title, desc);
    
    // Clear inputs
    titleInput.value = "";
    descInput.value = "";
});

function createTask(title, desc) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');

    taskDiv.innerHTML = `
        <div class="task-title"><strong>${title}</strong></div>
        <div class="task-desc">${desc}</div>
        <button class="delete-btn">X</button>
    `;

    // Delete functionality
    taskDiv.querySelector('.delete-btn').addEventListener('click', () => {
        taskDiv.remove();
    });

    // Mark as complete functionality (toggle opacity)
    taskDiv.addEventListener('dblclick', () => {
        taskDiv.style.opacity = taskDiv.style.opacity === '0.5' ? '1' : '0.5';
        taskDiv.style.textDecoration = taskDiv.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    });

    todoList.appendChild(taskDiv);
}