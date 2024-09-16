import React from 'react';

// Função que será chamada quando um elemento for clicado
function handleClick(event) {
  console.log(`Você pressionou um ${event.target.tagName}!`);
}

export default function Onclick() {
  return (
    <div>
      {/* Div com manipulador de evento onClick */}
      <div onClick={handleClick}><p>Clique-me</p></div>
      {/* Botão com manipulador de evento onClick */}
      <button onClick={handleClick}>Clicar</button>
    </div>
  );
}