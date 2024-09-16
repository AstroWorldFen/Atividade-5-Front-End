import React from 'react';

function handleClick(texto, event) {
  alert(`Você clicou no botão com texto: ${texto}`);
  console.log("Clicou!");
}

export default function Parametro() {
  return (
    <div>
      {/* Botão com manipulador de evento que passa um parâmetro */}
      <button onClick={(event) => handleClick('José', event)}>Clicar</button>
    </div>
  );
}
