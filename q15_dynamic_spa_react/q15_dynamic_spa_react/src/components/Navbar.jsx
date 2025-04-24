export default function Navbar({ setPage }) {
    const navStyle = {
      display: "flex",
      gap: "20px",
      padding: "10px",
      backgroundColor: "#282c34",
      color: "white",
      cursor: "pointer"
    };
  
    return (
      <div style={navStyle}>
        <span onClick={() => setPage("home")}>Home</span>
        <span onClick={() => setPage("about")}>About</span>
        <span onClick={() => setPage("contact")}>Contact</span>
      </div>
    );
  }
  