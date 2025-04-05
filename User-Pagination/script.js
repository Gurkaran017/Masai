const userContainer = document.getElementById('user-container');
const paginationContainer = document.getElementById('pagination');
const limit = 6;
let currentPage = 1;
let totalUsers = 10; // JSONPlaceholder has 10 users only

// Fetch users for a specific page
async function fetchUsers(page) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);
    if (!res.ok) throw new Error("Failed to fetch users");
    
    const users = await res.json();
    displayUsers(users);
    renderPagination();
  } catch (error) {
    console.error("Error fetching users:", error);
    userContainer.innerHTML = `<p style="color: red;">Failed to load users. Please try again later.</p>`;
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

// Render pagination buttons
function renderPagination() {
  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(totalUsers / limit);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    if (i === currentPage) btn.classList.add('active');

    btn.addEventListener('click', () => {
      currentPage = i;
      fetchUsers(i);
    });

    paginationContainer.appendChild(btn);
  }
}

// Load initial page
fetchUsers(currentPage);
