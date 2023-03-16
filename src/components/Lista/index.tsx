
import { Itarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';


// interface: uma forma de tipagem fora
interface Props{
    tarefas: Itarefa[];
    selecionaTarefa: (tarefaSelecionada:Itarefa) => void;
    // funçã que recebe um parametro do tipo Itarefa e não retorna nada
}

// vai pegar o tarefas e o props tem um tarefas que tem um array de tarefa, como array
function Lista({tarefas, selecionaTarefa}: Props){
  
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {/* executar js dentro das chaves, map:loop e retorna algo*/}
                {tarefas.map((item) =>(
                    <Item
                        {...item} /* desestruturação (sprad), pega tudo*/
                        key={item.id} /* permite ter um link no virtual DOM da DOm real, é recomendado que seja um id e não o index */
                        selecionaTarefa={selecionaTarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;