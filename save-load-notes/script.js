// Load notes when the page is loaded
document.addEventListener("DOMContentLoaded", loadNotes);

/**
 * Function to save user notes in localStorage
 */
function saveNotes() {
    let notes = document.getElementById("notes").value.trim(); // Get user input
    if (notes === "") {
        alert("Please enter some notes before saving."); // Prevent saving empty notes
        return;
    }
    localStorage.setItem("userNotes", notes); // Store notes in localStorage
    alert("Notes saved successfully!");
}

/**
 * Function to load saved notes from localStorage
 */
function loadNotes() {
    let savedNotes = localStorage.getItem("userNotes"); // Retrieve stored notes
    if (savedNotes) {
        document.getElementById("notes").value = savedNotes; // Display notes in textarea
    }
}

/**
 * Function to clear notes from localStorage
 */
function clearNotes() {
    localStorage.removeItem("userNotes"); // Remove notes from storage
    document.getElementById("notes").value = ""; // Clear textarea
    alert("Notes cleared successfully!");
}
