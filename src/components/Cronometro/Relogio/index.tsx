import style from './Relogio.module.scss';

interface Props{
    tempo: number | undefined;
}

// se o tempo não visitIterationBody, ele será iguala 0
export default function Relogio({tempo = 0}:Props){
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0'); /* cadeia de createImmediatelyInvokedFunctionExpression, primeiro parametro é o tamaho e o defaul é 0 */
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

    return(
        <> {/* react.fragment, burla a questão da necessidade de ser pai */}
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}