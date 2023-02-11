import React, { useEffect, useState } from "react";
import Botao from "../Botao";
import { Tarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";

interface ISetTarefas {
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
  tarefas: Tarefa[]
}

const Formulario = ({ setTarefas }: ISetTarefas) => {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00:00");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTarefas((antigaTarefa) => [
      ...antigaTarefa,
      {
        tarefa: tarefa,
        tempo: tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa("");
    setTempo("");
  };

  return (
    <form className="novaTarefa" onSubmit={handleSubmit}>
      <div className="inputContainer">
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          value={tarefa}
          onChange={(event) => setTarefa(event.target.value)}
          placeholder="Oque voce vai estudar"
          required
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          id="tempo"
          name="tempo"
          step="1"
          value={tempo}
          onChange={(event) => setTempo(event.target.value)}
          min="00:00:00"
          max="05:00:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
};

export default Formulario;
