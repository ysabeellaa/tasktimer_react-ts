import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { Itarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props{
    selecionado: Itarefa | undefined;
    finalizarTarefa: () => void;
}

export default function Cronometro({selecionado, finalizarTarefa}: Props){
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        selecionado?.tempo? setTempo(tempoParaSegundos(selecionado.tempo)): setTempo(0);
        /* valida se existe o selecionado e se existe o selecionado.tempo (?) */
    },[selecionado]) /* sempre que o selecionado mudar, será executado a função do primeiro parâmetro */

    // permite que uma determinada ação seja executada após um determinado período de tempo ter decorrido, nesse caso, será executado de 1 em 1 segundo
    function regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha o card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio
                    tempo={tempo}
                />
            </div>
            <Botao onClick={()=> regressiva(tempo)}>
                Começar
            </Botao>
        </div>
    )
}