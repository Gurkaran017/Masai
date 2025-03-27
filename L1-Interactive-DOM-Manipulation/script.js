// Select input fields, buttons, and div
const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const changeBgButton = document.getElementById("change-bg-btn");
const updateTextButton = document.getElementById("update-text-btn");
const contentBox = document.getElementById("content-box");

// Function to change background color
changeBgButton.addEventListener("click", () => {
    const color = colorInput.value.trim().toLowerCase();
    
    // Create a temporary element to check valid color
    const test = document.createElement("div");
    test.style.color = color;
    
    if (test.style.color) {
        contentBox.style.backgroundColor = color;
    } else {
        alert("Invalid color name!");
    }
});

// Function to update text content
updateTextButton.addEventListener("click", () => {
    const text = textInput.value.trim();
    
    if (text) {
        contentBox.textContent = text;
    } else {
        alert("Please enter some text!");
    }
});
