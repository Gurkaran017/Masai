const API_URL = 'https://mockapi.io/tasks'; 
const taskList = document.getElementById('taskList');
const modal = document.getElementById('editModal');
const closeModal = document.getElementById('closeModal');
const saveEdit = document.getElementById('saveEdit');
let currentEditId = null;

async function fetchTasks() {
  try {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    taskList.innerHTML = "";
    tasks.forEach(renderTask);
  } catch (err) {
    alert("Error fetching tasks.");
  }
}

function renderTask(task) {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.dataset.id = task.id;
  li.innerHTML = `
    <div class="task-info">
      <strong>${task.title}</strong> - <em>${task.status}</em>
    </div>
    <div>
      <button class="edit-btn" onclick="openEditModal('${task.id}', '${task.title}', '${task.status}')">Edit</button>
      <button class="delete-btn" onclick="deleteTask('${task.id}')">Delete</button>
    </div>
  `;
  taskList.appendChild(li);
}

async function deleteTask(id) {
  if (!confirm("Are you sure you want to delete this task?")) return;
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (res.ok) {
      document.querySelector(`[data-id="${id}"]`).remove();
    } else {
      throw new Error("Delete failed");
    }
  } catch (err) {
    alert("Error deleting task.");
  }
}

function openEditModal(id, title, status) {
  currentEditId = id;
  document.getElementById('editTitle').value = title;
  document.getElementById('editStatus').value = status;
  modal.style.display = 'block';
}

closeModal.onclick = () => modal.style.display = 'none';

saveEdit.onclick = async () => {
  const updatedTitle = document.getElementById('editTitle').value.trim();
  const updatedStatus = document.getElementById('editStatus').value;

  if (!updatedTitle) {
    alert("Title cannot be empty.");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/${currentEditId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: updatedTitle, status: updatedStatus })
    });

    if (res.ok) {
      modal.style.display = 'none';
      fetchTasks(); 
    } else {
      throw new Error("Update failed");
    }
  } catch (err) {
    alert("Error updating task.");
  }
};

window.onload = fetchTasks;
