document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasksCount = document.getElementById("completedTasksCount");
    const incompleteTasksCount = document.getElementById("incompleteTasksCount");

    const allTasksBtn = document.getElementById("allTasks");
    const completedTasksBtn = document.getElementById("completedTasks");
    const incompleteTasksBtn = document.getElementById("incompleteTasks");
    const sortTasksBtn = document.getElementById("sortTasks");

    let tasks = [];

    // Function to update UI
    function renderTasks(filter = "all") {
        taskList.innerHTML = "";

        let filteredTasks = tasks;
        if (filter === "completed") {
            filteredTasks = tasks.filter(task => task.completed);
        } else if (filter === "incomplete") {
            filteredTasks = tasks.filter(task => !task.completed);
        }

        filteredTasks.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `
                <input type="checkbox" class="toggle-task" data-id="${task.id}" ${task.completed ? "checked" : ""}>
                <span class="${task.completed ? "completed" : ""}">${task.text}</span>
                <button class="delete-task" data-id="${task.id}">Delete</button>
            `;
            taskList.appendChild(li);
        });

        updateCounters();
    }

    // Function to update task counters
    function updateCounters() {
        totalTasks.textContent = tasks.length;
        completedTasksCount.textContent = tasks.filter(task => task.completed).length;
        incompleteTasksCount.textContent = tasks.filter(task => !task.completed).length;
    }

    // Add new task
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push({ id: Date.now(), text: taskText, completed: false });
            taskInput.value = "";
            renderTasks();
        }
    });

    // Event delegation for delete and toggle actions
    taskList.addEventListener("click", (event) => {
        const id = Number(event.target.dataset.id);
        if (event.target.classList.contains("delete-task")) {
            tasks = tasks.filter(task => task.id !== id);
        } else if (event.target.classList.contains("toggle-task")) {
            tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        }
        renderTasks();
    });

    // Filter tasks
    allTasksBtn.addEventListener("click", () => renderTasks("all"));
    completedTasksBtn.addEventListener("click", () => renderTasks("completed"));
    incompleteTasksBtn.addEventListener("click", () => renderTasks("incomplete"));

    // Sort tasks alphabetically
    sortTasksBtn.addEventListener("click", () => {
        tasks.sort((a, b) => a.text.localeCompare(b.text));
        renderTasks();
    });

    renderTasks();
});
