import React from 'react'
import Item from './item'
import "./style.scss"

const tarefas = [
    {
        tarefa: "React",
        tempo: "02:00:00"
    },
    {
        tarefa: "Typescript",
        tempo: "03:00:00"
    },
    {
        tarefa: "Styled-Components",
        tempo: "02:00:00"
    }
]


function Lista() {

  return (
    <aside className='listaTarefas'>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item, index) => (
                <Item  {...item}   key={index}/>
            ))}
        </ul>
    </aside>
  )
}

export default Lista