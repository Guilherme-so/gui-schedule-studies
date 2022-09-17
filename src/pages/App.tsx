import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import  "../styles/style.scss";
import { Tarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])

  return (
    <div className='AppStyle'>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
