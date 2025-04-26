import React, { useState } from 'react';

function DynamicEmailForm() {
  const [emails, setEmails] = useState([{ value: '', error: '' }]);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (index, newValue) => {
    const updated = [...emails];
    updated[index].value = newValue;
    updated[index].error = validateEmail(newValue) ? '' : 'Invalid email';
    setEmails(updated);
  };

  const addEmailField = () => {
    setEmails([...emails, { value: '', error: '' }]);
  };

  return (
    <div>
      <form>
        {emails.map((email, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <input
              type="email"
              value={email.value}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Email ${index + 1}`}
              style={{ marginRight: '10px' }}
            />
            {email.error && <span style={{ color: 'red' }}>{email.error}</span>}
          </div>
        ))}
        <button type="button" onClick={addEmailField}>
          Add Email
        </button>
      </form>

      <h3>Entered Emails:</h3>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicEmailForm;
