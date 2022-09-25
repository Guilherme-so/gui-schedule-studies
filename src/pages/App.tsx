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


  function finalizarTarefa(){
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(oldOnes => oldOnes.map((tarefa) => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }

        return tarefa
      }))
    } 
  }

  return (
    <div className='AppStyle'>
      <Formulario setTarefas={setTarefas}/>
      <Lista selecionaTarefa={selecionaTarefa} tarefas={tarefas}/>
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
