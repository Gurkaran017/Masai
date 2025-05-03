import { useTheme } from "../ThemeContext";
import SubComponent from "./SubComponent";

function Main() {
  const { theme } = useTheme();

  const style = {
    background: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "8px",
    marginTop: "10px",
  };

  return (
    <div style={style}>
      <h2>Main Component</h2>
      <SubComponent />
    </div>
  );
}

export default Main;
