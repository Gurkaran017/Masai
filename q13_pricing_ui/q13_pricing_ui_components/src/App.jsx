import Header from "./components/Header";
import PricingCard from "./components/PricingCard";

function App() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]
    },
    {
      name: "Lorem Plus",
      price: "$32.00",
      features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]
    },
    {
      name: "Lorem Pro",
      price: "$50.00",
      features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]
    }
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <Header />
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
}

export default App;
