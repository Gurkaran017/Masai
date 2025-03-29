/**
 * Fetch user data from JSONPlaceholder API
 * and display user names in an unordered list.
 */
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        const userList = document.getElementById("userList");

        // Loop through users and create list items
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;

            // When clicked, show an alert with the user's email
            li.addEventListener("click", () => {
                alert(`Email: ${user.email}`);
            });

            userList.appendChild(li);
        });

    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// Call the function when the page loads
fetchUsers();
