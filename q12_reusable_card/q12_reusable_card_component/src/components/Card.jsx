const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    maxWidth: "300px",
  };
  
  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  };
  
  export default function Card({ title, children }) {
    return (
      <div style={cardStyle}>
        <div style={titleStyle}>{title}</div>
        <div>{children}</div>
      </div>
    );
  }
  