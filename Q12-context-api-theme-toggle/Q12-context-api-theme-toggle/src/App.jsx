import { ThemeProvider, useTheme } from "./ThemeContext";
import Main from "./components/Main";

function ThemeToggler() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <h1>Context API Theme Example</h1>
        <ThemeToggler />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
