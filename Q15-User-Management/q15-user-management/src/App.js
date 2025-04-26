import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const baseURL = "https://firebase-db.firebaseio.com/users"; // update this

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${baseURL}.json`);
      const data = res.data || {};
      const userArray = Object.entries(data).map(([id, user]) => ({ id, ...user }));
      setUsers(userArray);
    } catch (err) {
      setError("Failed to fetch users.");
    }
  };

  const addUser = async (user) => {
    try {
      await axios.post(`${baseURL}.json`, user);
      fetchUsers();
    } catch {
      setError("Failed to add user.");
    }
  };

  const updateUser = async (id, updatedData) => {
    try {
      await axios.patch(`${baseURL}/${id}.json`, updatedData);
      setEditingUser(null);
      fetchUsers();
    } catch {
      setError("Failed to update user.");
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${baseURL}/${id}.json`);
      fetchUsers();
    } catch {
      setError("Failed to delete user.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Management System</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <UserForm
        onSubmit={editingUser ? (data) => updateUser(editingUser.id, data) : addUser}
        initialData={editingUser}
        onCancel={() => setEditingUser(null)}
      />
      <UserList users={users} onEdit={setEditingUser} onDelete={deleteUser} />
    </div>
  );
}

export default App;
