import Botao from "../Botao";
import Relogio from "./Relogio";
import { tempoParaSegundos } from "../../utils/time";
import "./style.scss"
import { Tarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado : Tarefa | undefined
}

export default function Cronometro({selecionado}: Props) {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    return (
        <div className="cronometro">
            <p className="titulo">Escolha um card e inicie o cronometro</p>
            tempo: {tempo}
            <div className="relogioWrapper">
                <Relogio/>
            </div>
            <Botao>Começar</Botao>
        </div>
    )
}