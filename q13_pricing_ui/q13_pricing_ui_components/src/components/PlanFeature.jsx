export default function PlanFeature({ text }) {
    return (
      <p style={{ display: "flex", alignItems: "center", gap: "8px", color: "#2e7d32", marginBottom: "6px" }}>
        ✅ {text}
      </p>
    );
  }
  