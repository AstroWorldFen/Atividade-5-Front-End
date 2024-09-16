import React, { useState } from 'react';

// Componente para demonstrar o uso de useState
export default function Titulo() {
  // Estado para armazenar o nome
  const [nome, setNome] = useState('Mundo');

  return (
    <div>
      <h1>Olá {nome}!</h1>
      {/* Botão para atualizar o estado com um novo nome */}
      <button onClick={() => setNome('José')}>Entrar</button>
    </div>
  );
}