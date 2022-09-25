import { CheckSquareOffset } from "phosphor-react";
import { Tarefa } from "../../../types/tarefa";
import styles from "./item.module.css"

interface Props extends Tarefa {
  selecionaTarefa: (tarefaSelecionada: Tarefa) => void;
}

export default function Item({
  id,
  tarefa,
  tempo,
  selecionado,
  completado,
  selecionaTarefa,
}: Props) {

    return (
    <li className={`${styles.item} ${selecionado ?  styles.itemSelecionado : ""} ${completado ? styles.itemCompletado : ""}`} onClick={() =>selecionaTarefa({
        id,
        tarefa,
        tempo,
        selecionado,
        completado
    })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
      <span className={styles.concluido} aria-label="">
        <CheckSquareOffset size={32} />
      </span>
      )}
    </li>
  );
}
