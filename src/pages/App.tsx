import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import  "../styles/style.scss";
import { Tarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  const [selecionado, setSelecionado] = useState<Tarefa>()

  function selecionaTarefa(tarefaSelecionada:Tarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(oldOnes => oldOnes.map((tarefa) => ({
      ...tarefa,
      selecionado: tarefaSelecionada.id === tarefa.id ? true : false
    })))
  }

  return (
    <div className='AppStyle'>
      <Formulario setTarefas={setTarefas}/>
      <Lista selecionaTarefa={selecionaTarefa} tarefas={tarefas}/>
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
