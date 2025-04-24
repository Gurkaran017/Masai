import PlanFeature from "./PlanFeature";

export default function PricingCard({ name, price, features }) {
  return (
    <div style={{
      borderTop: "1px solid #eee",
      padding: "20px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div>
        <strong style={{ fontSize: "18px" }}>{name}</strong>
        <div style={{ marginTop: "10px" }}>
          {features.map((item, index) => (
            <PlanFeature key={index} text={item} />
          ))}
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px" }}>
          {price}
        </div>
        <button style={{
          backgroundColor: "#d6ccfc",
          color: "#4c00c2",
          border: "none",
          borderRadius: "6px",
          padding: "8px 16px",
          cursor: "pointer"
        }}>
          Get Started
        </button>
      </div>
    </div>
  );
}
