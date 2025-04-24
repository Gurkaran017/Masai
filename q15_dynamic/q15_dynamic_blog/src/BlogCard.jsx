export default function BlogCard({ title, content, isFeatured }) {
    const cardStyle = {
      backgroundColor: isFeatured ? "#fff9c4" : "#f1f1f1",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px",
      boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    };
  
    return (
      <div style={cardStyle}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  }
  