// Function to apply theme based on user selection
function applyTheme(theme) {
    document.body.classList.remove("dark-theme", "blue-theme"); // Remove previous themes

    // Apply selected theme
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    } else if (theme === "blue") {
        document.body.classList.add("blue-theme");
    }

    sessionStorage.setItem("selectedTheme", theme); // Store theme in sessionStorage
}

// Function to load theme from sessionStorage
function loadTheme() {
    let savedTheme = sessionStorage.getItem("selectedTheme") || "light"; // Default to light
    document.getElementById("themeSelector").value = savedTheme; // Set dropdown value
    applyTheme(savedTheme); // Apply stored theme
}

// Event listener for theme selection change
document.getElementById("themeSelector").addEventListener("change", function () {
    applyTheme(this.value);
});

// Load theme when page loads
document.addEventListener("DOMContentLoaded", loadTheme);
