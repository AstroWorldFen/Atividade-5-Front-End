import React, { useState } from 'react';

// Componente para demonstrar o uso de onFocus e onBlur
const FocusExemplo = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <div>
      <h2>React onFocus and onBlur Example</h2>
      <input
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Click or tab to focus"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: isFocused ? '2px solid green' : '1px solid gray',
        }}
      />
      <div style={{ marginTop: '20px' }}>
        {isFocused ? <p>O input está focado</p> : <p>O input não está focado</p>}
      </div>
      <p>Input valor: {inputValue}</p>
    </div>
  );
};

export default FocusExemplo;