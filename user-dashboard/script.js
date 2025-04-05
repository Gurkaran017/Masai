const API_URL = "https://mockapi.io/users"; 
const userList = document.getElementById("userList");
const message = document.getElementById("message");

async function fetchUsers() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch users");
    const users = await res.json();

    userList.innerHTML = "";
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });
  } catch (err) {
    console.error(err);
    message.style.color = "red";
    message.innerText = "Error fetching users.";
  }
}

async function addUser(user) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });

    if (!res.ok) throw new Error("User creation failed");

    const newUser = await res.json();
    const li = document.createElement("li");
    li.textContent = `${newUser.name} (${newUser.email})`;
    userList.appendChild(li);

    message.style.color = "green";
    message.innerText = "User added successfully!";
  } catch (err) {
    console.error(err);
    message.style.color = "red";
    message.innerText = "Error adding user.";
  }
}

document.getElementById("userForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  message.innerText = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    message.style.color = "red";
    message.innerText = "All fields are required.";
    return;
  }

  // Check for duplicates
  const existingUsers = Array.from(userList.children).map(li => li.textContent);
  if (existingUsers.some(text => text.includes(email))) {
    message.style.color = "orange";
    message.innerText = "User with this email already exists.";
    return;
  }

  const user = { name, email };
  await addUser(user);
  document.getElementById("userForm").reset();
});

window.onload = fetchUsers;
