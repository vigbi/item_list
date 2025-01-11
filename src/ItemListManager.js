import React, { useState } from 'react';

function ItemListManager() {
  const [items, setItems] = useState([]); // State to store list items
  const [inputValue, setInputValue] = useState(''); // State to store input field value

  // Handler to add a new item
  const handleAddItem = () => {
    if (inputValue.trim() === '') return; // Prevent adding empty items
    setItems([...items, inputValue.trim()]); // Add new item to the list
    setInputValue(''); // Clear the input field
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Item List Manager</h1>
      <div style={{ margin: '10px 0' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
          style={{
            padding: '10px',
            width: '60%',
            maxWidth: '400px',
            fontSize: '16px',
          }}
        />
      </div>
      <button
        onClick={handleAddItem}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#4CAF50',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add Item
      </button>
      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: '0' }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '5px 0', fontSize: '18px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
