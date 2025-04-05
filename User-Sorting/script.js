const userContainer = document.getElementById('user-container');
const sortSelect = document.getElementById('sort');
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Fetch and display users
async function fetchUsers() {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("Failed to fetch users");

    let users = await res.json();
    displayUsers(users);

    sortSelect.addEventListener('change', () => {
      users = sortUsers(users, sortSelect.value);
      displayUsers(users);
    });

  } catch (error) {
    console.error("Error fetching users:", error);
    userContainer.innerHTML = `<p style="color: red;">Failed to load users.</p>`;
  }
}

// Display user data
function displayUsers(users) {
  userContainer.innerHTML = '';

  users.forEach(user => {
    const div = document.createElement('div');
    div.className = 'user-card';
    div.innerHTML = `
      <strong>${user.name}</strong> <br>
      📧 ${user.email} <br>
      📍 ${user.address.city}
    `;
    userContainer.appendChild(div);
  });
}

// Sort users based on selection
function sortUsers(users, criteria) {
  return users.sort((a, b) => {
    if (criteria === "name") return a.name.localeCompare(b.name);
    if (criteria === "name-desc") return b.name.localeCompare(a.name);
  });
}

// Load users
fetchUsers();
