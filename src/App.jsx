import React from 'react';
import './App.css'; 


import Titulo from './Componente Titulo';
import Eventoboton from './Componente Eventoboton';
import Parametro from './Componente Parametro';
import Onclick from './Componente Onclick';
import Onchange from './Componente Onchange';
import Onkey from './Componente Onkey'; 
import Onsub from './Componente Onsub';
import Eventos from './Eventos'; 
import FocusExemplo from './FocusExemplo'; 

const App = () => {
  return (
    <div className="container">
      <Titulo />
      <Eventoboton />
      <Parametro />
      <Onclick />
      <Onchange />
      <Onkey />
      <Onsub />
      <Eventos /> 
      <FocusExemplo /> 
    </div>
  );
};

export default App;
