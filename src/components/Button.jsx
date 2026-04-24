import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button 
      onClick={() => setCount((c) => c + 1)}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#646cff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'background-color 0.2s',
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#535bf2'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#646cff'}
    >
      Remote Button - Clicked {count} times
    </button>
  );
};

export default Button;
