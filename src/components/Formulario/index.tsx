import React, { useState } from 'react';
import { Itarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import {v4 as uuidv4} from 'uuid';

interface Props{
setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}


function Formulario(props: Props) {
  const {setTarefas} = props;
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");


  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas, 
        {
           tarefa: tarefa, 
           tempo: tempo, 
           selecionado:false, 
           completado: false,
           id: uuidv4()
        }
      ]
    );
    // resetar o formulario
    setTarefa("");
    setTempo("00:00");

  }
        return(
            <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
              <label htmlFor="tarefa">
                 Adicione um novo estudo
               </label>
               <input
                  type="text"
                  name="tarefa"
                  id="tarefa"
                  placeholder="O que você quer estudar"
                  required
                  value={tarefa}
                  onChange ={(evento) => setTarefa(evento.target.value)}
                />
            </div>
            <div className={style.inputContainer}>
              <label htmlFor="tempo">
                Tempo
              </label>
              <input
                type="time"
                step="1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required
                value={tempo}
                onChange={(evento) => setTempo(evento.target.value)}
              />
            </div>
          <Botao type="submit">
            Adicionar {/* indo como children */}
          </Botao>
        </form>
      )
    }
  

export default Formulario;