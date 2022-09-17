import { Tarefa } from '../../types/tarefa'
import Item from './item'
import "./style.scss"


function Lista({tarefas}:{tarefas: Tarefa[]}) {

  return (
    <aside className='listaTarefas'>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas?.map((item, index) => (
                <Item  {...item}   key={index}/>
            ))}
        </ul>
    </aside>
  )
}

export default Lista