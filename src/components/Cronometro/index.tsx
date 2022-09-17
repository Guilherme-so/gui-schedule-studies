import Botao from "../Botao";
import Relogio from "./Relogio";
import "./style.scss"

export default function Cronometro() {

    return (
        <div className="cronometro">
            <p className="titulo">Escolha um card e inicie o cronometro</p>
            <div className="relogioWrapper">
                <Relogio/>
            </div>
            <Botao>Começar</Botao>
        </div>
    )
}