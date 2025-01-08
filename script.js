function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteTask(this);
        };

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}