import React from 'react';

function handleChange(event) {
  console.log(`Você mudou para ${event.target.value}!`);
}

export default function Onchange() {
  return (
    <div>
      {/* Input com manipulador de evento onChange */}
      <input onChange={handleChange} placeholder="Digite algo..." />
      {/* Textarea com manipulador de evento onChange */}
      <textarea onChange={handleChange} placeholder="Digite algo..." />
      {/* Select com manipulador de evento onChange */}
      <select onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
}