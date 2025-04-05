const firebaseURL = 'https://<your-database-name>.firebaseio.com/users.json'; // Replace with your database URL

async function fetchUsers() {
  try {
    const response = await fetch(firebaseURL);
    if (!response.ok) throw new Error('Failed to fetch data from Firebase');
    
    const data = await response.json();
    displayUsers(data);
  } catch (error) {
    document.getElementById('error').innerText = error.message;
  }
}

function displayUsers(users) {
  const tbody = document.querySelector('#userTable tbody');
  tbody.innerHTML = '';

  for (let userId in users) {
    const { name, email } = users[userId];

    const row = document.createElement('tr');
    row.innerHTML = `<td>${name}</td><td>${email}</td>`;
    tbody.appendChild(row);
  }
}

fetchUsers();
