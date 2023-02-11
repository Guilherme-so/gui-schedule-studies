import  { useEffect, useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import "../styles/style.scss";
import { Tarefa } from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Tarefa>();

  // useEffect(() => {
  //   if(tarefas.length != 0) {
  //     localStorage.setItem('key', JSON.stringify(tarefas));
  //   }    
  //   if(localStorage.hasOwnProperty('key')) {
  //     let data:any = localStorage.getItem('key')
  //     const parsedData = JSON.parse(data)
  //     setTarefas(parsedData)
  //   }
  // },[tarefas])



  function selecionaTarefa(tarefaSelecionada: Tarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((oldOnes) =>
      oldOnes.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefaSelecionada.id === tarefa.id ? true : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((oldOnes) =>
        oldOnes.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }

          return tarefa;
        })
      );
    }
  }

  return (
    <div className="AppStyle">
      <div>
        <Formulario tarefas={tarefas} setTarefas={setTarefas} />
        <Cronometro selecionado={selecionado}finalizarTarefa={finalizarTarefa}/>
      </div>
      <div className="lista">
        <Lista selecionaTarefa={selecionaTarefa} tarefas={tarefas} />
      </div>
    </div>
  );
}

export default App;
