import { useAuth } from "../AuthContext";

function Navbar() {
  const { isLoggedIn, toggleAuth } = useAuth();

  return (
    <nav style={{ background: "#333", color: "#fff", padding: "10px" }}>
      <span style={{ marginRight: "20px" }}>My App</span>
      <button onClick={toggleAuth}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
}

export default Navbar;
