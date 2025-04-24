import ListComponent from "./ListComponent";

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  
  return (
    <div>
      <h1>My App</h1>
      <ListComponent items={items} />
    </div>
  );
}

export default App;
