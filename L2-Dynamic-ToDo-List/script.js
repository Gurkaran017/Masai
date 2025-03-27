// Selecting elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to add a task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    // Check for empty input
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create 'Complete' button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.style.backgroundColor = "green";
    completeBtn.style.color = "white";

    // Create 'Delete' button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";

    // Append buttons to list item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";

    // Event listener for 'Complete' button
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Event listener for 'Delete' button
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });
});
