import React, { useState } from 'react';

function ShoppingList() {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [list, setList] = useState([]);

  const handleAddItem = () => {
    if (!item || !quantity || parseInt(quantity) < 1) {
      alert('Please enter a valid item and quantity greater than 0.');
      return;
    }

    setList((prevList) => [
      ...prevList,
      { id: Date.now(), name: item, quantity: quantity },
    ]);
    setItem('');
    setQuantity('');
  };

  const handleRemoveItem = (id) => {
    setList(list.filter((i) => i.id !== id));
  };

  const handleClearAll = () => {
    setList([]);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <input
        type="text"
        placeholder="Item name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleClearAll}>Clear All</button>

      <ul>
        {list.map((i) => (
          <li key={i.id}>
            {i.name} - {i.quantity}{' '}
            <button onClick={() => handleRemoveItem(i.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
