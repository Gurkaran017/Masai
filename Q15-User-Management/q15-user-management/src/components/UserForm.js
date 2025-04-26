import React, { useState, useEffect } from 'react';

function UserForm({ onSubmit, initialData, onCancel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
    }
  }, [initialData]);

  const validate = () => {
    if (!name || !email) {
      return "All fields are required.";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Invalid email format.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errMsg = validate();
    if (errMsg) {
      setError(errMsg);
      return;
    }
    onSubmit({ name, email });
    setName('');
    setEmail('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button type="submit">{initialData ? "Update" : "Add User"}</button>
      {initialData && (
        <button type="button" onClick={onCancel} style={{ marginLeft: '10px' }}>
          Cancel
        </button>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default UserForm;
