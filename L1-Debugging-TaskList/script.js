// Selecting elements
const addTaskButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskButton.onclick = function () {
    const taskText = taskInput.value.trim(); // Trim to avoid empty spaces

    if (taskText === "") {
        alert("Please enter a valid task!"); // Prevents adding empty tasks
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskText; // Safer than innerHTML
    taskList.appendChild(newTask); // ✅ Fixed append issue

    taskInput.value = ""; // Clears input after adding
};

taskList.onclick = function (e) {
    if (e.target.tagName === 'LI') { // ✅ Fixed incorrect condition
        e.target.remove();
    }
};
