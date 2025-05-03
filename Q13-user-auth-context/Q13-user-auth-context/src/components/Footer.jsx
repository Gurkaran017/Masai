import { useAuth } from "../AuthContext";

function Footer() {
  const { isLoggedIn } = useAuth();

  return (
    <footer style={{ background: "#eee", padding: "10px", marginTop: "20px" }}>
      <p>{isLoggedIn ? "Welcome, User" : "Please log in"}</p>
    </footer>
  );
}

export default Footer;
