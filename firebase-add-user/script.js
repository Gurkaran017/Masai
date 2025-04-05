const form = document.getElementById("userForm");
const message = document.getElementById("message");


const firebaseURL = "https://<your-database-name>.firebaseio.com/users.json";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    message.style.color = "red";
    message.innerText = "Please fill out all fields.";
    return;
  }

  const userData = { name, email };

  try {
    const response = await fetch(firebaseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error("Failed to add user");

    message.style.color = "green";
    message.innerText = "User added successfully!";
    form.reset();
  } catch (error) {
    message.style.color = "red";
    message.innerText = "Error: " + error.message;
  }
});
