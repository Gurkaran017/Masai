document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');
  
    message.style.color = 'blue';
    message.innerText = 'Submitting...';
  
    if (!name || !email || !password) {
      message.style.color = 'red';
      message.innerText = 'All fields are required.';
      return;
    }
  
    const userData = { name, email, password };
  
    try {
      const response = await fetch('https://mockapi.io/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      const result = await response.json();
      message.style.color = 'green';
      message.innerText = 'Registration successful!';
  
      // Clear the form
      document.getElementById('registerForm').reset();
  
    } catch (error) {
      message.style.color = 'red';
      message.innerText = 'Error: Email might already exist or server error.';
      console.error('Error:', error);
    }
  });
  