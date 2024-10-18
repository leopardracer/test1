const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Complete" button
        const completeButton = document.createElement('button');
        completeButton.textContent = '✓';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Create a "Delete" button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ''; // Clear input field
    }
}
