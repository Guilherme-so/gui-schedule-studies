import { Tarefa } from '../../types/tarefa'
import Item from './item'
import styles from "./lista.module.css"

interface Props {
  tarefas: Tarefa[]
  selecionaTarefa: (tarefaSelecionada:Tarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props) {

  return (
    <aside className={styles.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas?.map((item) => (
              <Item 
              selecionaTarefa={selecionaTarefa}
              key={item.id} 
              {...item} 
               />
            ))}
        </ul>
    </aside>
  )
}

export default Lista