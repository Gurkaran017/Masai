const form = document.getElementById('preferencesForm');
const themeSelect = document.getElementById('theme');
const languageSelect = document.getElementById('language');
const notificationsCheckbox = document.getElementById('notifications');

/**
 * Function to apply the selected theme dynamically
 */
function applyTheme(theme) {
    document.body.classList.toggle("dark-theme", theme === "dark");
}

/**
 * Function to load preferences from localStorage
 */
function loadPreferences() {
    const preferences = localStorage.getItem('preferences');
    if (preferences) {
        const parsedPreferences = JSON.parse(preferences);

        themeSelect.value = parsedPreferences.theme; // Set theme
        languageSelect.value = parsedPreferences.language; // Set language
        notificationsCheckbox.checked = parsedPreferences.notifications; // Set checkbox state

        applyTheme(parsedPreferences.theme); // Apply theme on load
    }
}

/**
 * Event listener to save preferences in localStorage
 */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const preferences = {
        theme: themeSelect.value,
        language: languageSelect.value,
        notifications: notificationsCheckbox.checked
    };
    localStorage.setItem('preferences', JSON.stringify(preferences)); // Save preferences
    applyTheme(preferences.theme); // Apply theme dynamically
    alert('Preferences Saved!');
});

// Load preferences when the page loads
window.onload = loadPreferences;
