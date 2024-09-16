import React from 'react';

// Função que será chamada quando o botão for clicado
function handleClick() {
  alert('Botão clicado!');
}

export default function Eventoboton() {
  return (
    <div>
      {/* Botão com manipulador de evento onClick */}
      <button onClick={handleClick}>Clique</button>
    </div>
  );
}