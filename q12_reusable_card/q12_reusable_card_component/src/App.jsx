import Card from "./components/Card";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <Card title="Card One">
        <p>This is the content of the first card.</p>
      </Card>
      <Card title="Card Two">
        <p>This card contains different content.</p>
      </Card>
      <Card title="Card Three">
        <p>Each card is reusable and dynamic!</p>
      </Card>
    </div>
  );
}

export default App;
