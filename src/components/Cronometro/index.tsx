import Botao from "../Botao";
import Relogio from "./Relogio";
import { tempoParaSegundos } from "../../utils/time";
import "./style.scss"
import { Tarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado : Tarefa | undefined
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado,finalizarTarefa}: Props) {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])


    function contagemRegressiva(contador : number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador -1)
                return contagemRegressiva(contador -1)
            } else{
                finalizarTarefa()
            }
        }, 1000)
    }

    return (
        <div className="cronometro">
            <p className="titulo">Escolha um card e inicie o cronometro</p>
            <div className="relogioWrapper">
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => contagemRegressiva(tempo)}>Começar</Botao>
        </div>
    )
}