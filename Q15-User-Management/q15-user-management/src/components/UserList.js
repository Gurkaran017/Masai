import React from 'react';

function UserList({ users, onEdit, onDelete }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} style={{ marginBottom: '10px' }}>
          <strong>{user.name}</strong> - {user.email}
          <button onClick={() => onEdit(user)} style={{ marginLeft: '10px' }}>Edit</button>
          <button onClick={() => onDelete(user.id)} style={{ marginLeft: '5px' }}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
