// funcção utilitária comum de temp

export function tempoParaSegundos(tempo: string) {
    const [hrs ="0", min ="0", seg="0"] = tempo.split(':')
    const horasEmSegundos = Number(hrs) *3600; /* transformando a string em numero */
    const minutosEmSegundos = Number(min) *60;
    
    return horasEmSegundos + minutosEmSegundos + Number(seg);

}