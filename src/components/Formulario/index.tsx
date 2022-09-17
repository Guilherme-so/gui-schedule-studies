import React, { useState } from "react"
import Botao from "../Botao"
import "./style.scss"

import {Tarefa} from "../../types/tarefa"

const Formulario = ({setTarefas}:{setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>})=> {
    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("00:00")

    console.log(tarefa, tempo)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setTarefas((antigaTarefa) => [...antigaTarefa, {tarefa: tarefa, tempo: tempo}])
    }
    
    return (
    <form className="novaTarefa" onSubmit={handleSubmit}>
        <div className="inputContainer">
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input 
        type="text" 
        id="tarefa" 
        name="tarefa" 
        value={tarefa}
        onChange={event => setTarefa(event.target.value)}
        placeholder="Oque voce quer estudar" 
        required/>
        
        </div>
        <div className="inputContainer">
            <label htmlFor="tempo">Tempo</label>
            <input 
            type="time" 
            id="tempo" 
            name="tempo" 
            step='1'
            value={tempo}
            onChange={event => setTempo(event.target.value)}
            min="00:00:00" 
            max='10:00:00' 
            required/>
            </div>
            <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }

export default Formulario