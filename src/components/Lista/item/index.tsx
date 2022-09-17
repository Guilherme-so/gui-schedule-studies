import { Tarefa } from '../../../types/tarefa'
import '../style.scss'

export default function Item ({id, tarefa, tempo,selecionado,completado}: Tarefa) {
    console.log(id, tarefa, tempo,selecionado,completado)
    return (
        <li className='item'>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}