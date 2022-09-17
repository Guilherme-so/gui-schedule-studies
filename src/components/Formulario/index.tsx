import React from "react"
import Botao from "../Botao"
import "./style.scss"

class Formulario extends React.Component {
    render(): React.ReactNode {
        
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text" id="tarefa" name="tarefa" placeholder="Oque voce quer estudar" required/>
                </div>
                <div className="inputContainer">
                <label htmlFor="tempo">Tempo</label>
                <input type="time" id="tempo" name="tempo" step='1' min="00:00:00" max='01:30:00' required/>
                </div>
                <Botao>Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario