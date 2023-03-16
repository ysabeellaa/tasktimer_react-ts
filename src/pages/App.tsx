import React, {useState} from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Itarefa } from '../types/tarefa';
import style from './App.module.scss';


function App() {
    // adicionando um estado 
    const [tarefas, setTarefas] = useState<Itarefa[] | []>([])
    // criar o estado de selecionado
  const [selecionado, setSelecionado] =useState<Itarefa>() /* <tipagem> */

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id? true: false
    })))
  }

  function finalizarTarefa(){
   if(selecionado){
    setSelecionado(undefined);
    setTarefas(tarefasAnteriores => 
      tarefasAnteriores.map(tarefa => {
      if (tarefa.id === selecionado.id){
        return {
          ...tarefa,
          selecionado: false,
          completado: true
        }
      }
        return tarefa;
      }))
   }
  }


  return (
    <div className={style.AppStyle}> {/* o modulo exporta um objeto que possui as classes do csss modules */}
      <Formulario setTarefas={setTarefas}/>
      <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado = {selecionado}
        finalizarTarefa = {finalizarTarefa}
      />
    </div>
  );
}

export default App;
