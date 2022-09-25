import "./style.scss"

interface Props {
    tempo: number | undefined
}

export default function Relogio({tempo = 0}: Props) {
    const minutos = Math.floor(tempo / 60)   // Math.floor pega o numero sem resto 
    const segundos = tempo % 60             // % pega o resto de 60 

    const [minutosDezena, minutosUnidade] = String(minutos).padStart(2, "0")
    const [segundosDezena, segundosUnidade] = String(segundos).padStart(2,"0")

    return(
        <>
        <span className='relogioNumero'>{minutosDezena}</span>
        <span className='relogioNumero'>{minutosUnidade}</span>
        <span className="relogioDivisao">:</span>
        <span className='relogioNumero'>{segundosDezena}</span>
        <span className='relogioNumero'>{segundosUnidade}</span>
        </>
    )
}