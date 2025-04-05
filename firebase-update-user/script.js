const firebaseURL = "https://<your-db-name>.firebaseio.com/users"; // No `.json` yet
const userTableBody = document.querySelector("#userTable tbody");
const editSection = document.getElementById("editSection");
const editForm = document.getElementById("editForm");
const editName = document.getElementById("editName");
const editEmail = document.getElementById("editEmail");
const message = document.getElementById("message");

let currentEditId = null;

async function fetchUsers() {
  try {
    const res = await fetch(`${firebaseURL}.json`);
    const data = await res.json();
    displayUsers(data);
  } catch (err) {
    message.innerText = "Error fetching users.";
  }
}

function displayUsers(users) {
  userTableBody.innerHTML = "";
  for (let id in users) {
    const { name, email } = users[id];

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td><button onclick="editUser('${id}', '${name}', '${email}')">Edit</button></td>
    `;
    userTableBody.appendChild(row);
  }
}

function editUser(id, name, email) {
  currentEditId = id;
  editName.value = name;
  editEmail.value = email;
  editSection.classList.remove("hidden");
}

editForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const updatedData = {
    name: editName.value.trim(),
    email: editEmail.value.trim()
  };

  try {
    const res = await fetch(`${firebaseURL}/${currentEditId}.json`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData)
    });

    if (!res.ok) throw new Error("Failed to update");

    message.innerText = "User updated successfully!";
    editSection.classList.add("hidden");
    fetchUsers();
  } catch (err) {
    message.innerText = "Error updating user.";
  }
});

fetchUsers();
