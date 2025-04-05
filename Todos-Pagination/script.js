let todos = [];
let currentPage = 1;
const limit = 10;

document.getElementById("fetch-btn").addEventListener("click", fetchTodos);

async function fetchTodos() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    todos = await res.json();
    renderTodos();
    renderPagination();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function renderTodos() {
  const container = document.getElementById('todo-container');
  container.innerHTML = '';

  const start = (currentPage - 1) * limit;
  const end = start + limit;
  const currentTodos = todos.slice(start, end);

  currentTodos.forEach(todo => {
    const div = document.createElement('div');
    div.className = 'todo';
    div.innerHTML = `
      ${todo.title}
      <input type="checkbox" ${todo.completed ? "checked" : ""} />
    `;
    container.appendChild(div);
  });
}

function renderPagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const totalPages = Math.ceil(todos.length / limit);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    if (i === currentPage) btn.classList.add('active');

    btn.addEventListener('click', () => {
      currentPage = i;
      renderTodos();
      renderPagination();
    });

    pagination.appendChild(btn);
  }
}
