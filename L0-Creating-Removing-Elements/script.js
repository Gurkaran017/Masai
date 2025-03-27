// Selecting elements
const addButton = document.getElementById("add-btn");
const removeButton = document.getElementById("remove-btn");
const container = document.getElementById("container");

// Function to add a new paragraph
addButton.addEventListener("click", () => {
    const paragraph = document.createElement("p"); // Create a new <p> element
    paragraph.textContent = "This is a new paragraph."; // Set text content
    container.appendChild(paragraph); // Append to the container
});

// Function to remove the last paragraph
removeButton.addEventListener("click", () => {
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild); // Remove last <p> if exists
    }
});
