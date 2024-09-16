import React from 'react';

// Função que será chamada quando o formulário for enviado
function handleSubmit(event) {
  event.preventDefault(); // Impede o comportamento padrão do formulário
  const formData = new FormData(event.target);
  console.log(`Nome enviado: ${formData.get('name')}`);
}

export default function Onsub() {
  return (
    <div>
      {/* Formulário com manipulador de evento onSubmit */}
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}