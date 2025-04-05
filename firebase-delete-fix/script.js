const firebaseURL = "https://your-project-id.firebaseio.com/users"; 
const userTable = document.getElementById("userTable").getElementsByTagName("tbody")[0];
const message = document.getElementById("message");

// Fetch and display users
async function fetchUsers() {
  try {
    const res = await fetch(`${firebaseURL}.json`);
    const data = await res.json();
    renderUsers(data);
  } catch (err) {
    message.innerText = "Failed to fetch users.";
  }
}

function renderUsers(users) {
  userTable.innerHTML = "";
  for (let key in users) {
    const user = users[key];
    const row = document.createElement("tr");
    row.id = `row-${key}`;
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td><button onclick="deleteUser('${key}')">Delete</button></td>
    `;
    userTable.appendChild(row);
  }
}

// Delete function (FIXED)
const deleteUser = (key) => {
  fetch(`https://your-project-id.firebaseio.com/users/${key}.json`, {
    method: 'DELETE',
  })
  .then(response => {
    if (!response.ok) throw new Error("Delete failed");
    // Remove row from table
    document.getElementById(`row-${key}`).remove();
    message.innerText = "User deleted successfully!";
  })
  .catch(error => {
    console.error("Error deleting user:", error);
    message.innerText = "Failed to delete user.";
  });
};

fetchUsers();
