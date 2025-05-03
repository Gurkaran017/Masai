import { useTheme } from "../ThemeContext";

function SubComponent() {
  const { theme } = useTheme();

  const style = {
    background: theme === "light" ? "#fff" : "#555",
    color: theme === "light" ? "#000" : "#fff",
    padding: "15px",
    borderRadius: "5px",
    marginTop: "10px",
  };

  return (
    <div style={style}>
      <h3>SubComponent</h3>
      <p>This is nested and still uses the global theme!</p>
    </div>
  );
}

export default SubComponent;
