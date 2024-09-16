import React from 'react';

// Função que será chamada quando uma tecla for pressionada
function handleKeyDown(event) {
  console.log(`Você acionou a tecla ${event.key}`);
}

export default function Onkey() {
  return (
    <div>
      {/* Input com manipulador de evento onKeyDown */}
      <input onKeyDown={handleKeyDown} placeholder="Pressione uma tecla..." />
    </div>
  );
}