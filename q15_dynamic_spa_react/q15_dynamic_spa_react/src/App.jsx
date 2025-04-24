import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState("home");

  let content;
  let color;

  if (page === "home") {
    content = "Welcome to Home";
    color = "#f0f8ff";
  } else if (page === "about") {
    content = "About Us";
    color = "#e6ffe6";
  } else {
    content = "Contact Us";
    color = "#fff0f5";
  }

  return (
    <div>
      <Navbar setPage={setPage} />
      <div style={{ padding: "30px", backgroundColor: color, minHeight: "80vh" }}>
        <h1>{content}</h1>
      </div>
    </div>
  );
}

export default App;
