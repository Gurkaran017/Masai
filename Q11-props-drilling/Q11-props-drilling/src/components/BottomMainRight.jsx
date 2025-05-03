function BottomMainRight({ userName }) {
    return (
      <div style={{ border: '1px solid #666', padding: '10px', marginTop: '10px' }}>
        <h4>BottomMainRight Component</h4>
        <p>Hello, <strong>{userName || "Guest"}</strong>!</p>
      </div>
    );
  }
  
  export default BottomMainRight;
  