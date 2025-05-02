import React from "react";
import "./styles.css"; // Import the styles

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Welcome to My Website</h1>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="main-content">
        <h2>Welcome to the homepage!</h2>
        <p>This is a simple layout created with Vite and React.</p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
