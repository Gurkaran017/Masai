export default function ListComponent({ items }) {
    return (
      <div>
        <h2>Item List</h2>
        {items.length > 0 ? (
          items.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>No items found</p>
        )}
      </div>
    );
  }
  