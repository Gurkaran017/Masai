// Load tasks when the page is loaded
document.addEventListener("DOMContentLoaded", loadTasks);

/**
 * Function to add a task
 */
function addTask() {
    let taskInput = document.getElementById("taskInput").value.trim();
    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let newTask = { id: Date.now(), text: taskInput, completed: false };

    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Store updated tasks in localStorage

    document.getElementById("taskInput").value = ""; // Clear input
    displayTasks();
}

/**
 * Function to display tasks
 */
function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}" onclick="toggleComplete(${task.id})">
                ${task.text}
            </span>
            <button onclick="removeTask(${task.id})">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

/**
 * Function to toggle task completion
 */
function toggleComplete(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

/**
 * Function to remove a task
 */
function removeTask(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.id !== id);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

/**
 * Function to search tasks
 */
function searchTasks() {
    let searchText = document.getElementById("searchInput").value.toLowerCase();
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    let filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchText));
    
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    filteredTasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}" onclick="toggleComplete(${task.id})">
                ${task.text}
            </span>
            <button onclick="removeTask(${task.id})">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

/**
 * Function to load tasks from localStorage on page load
 */
function loadTasks() {
    displayTasks();
}
