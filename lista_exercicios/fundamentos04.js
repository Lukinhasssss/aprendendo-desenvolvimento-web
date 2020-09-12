/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores. */

 /*OBS: DIVIDENDO -> Número que será dividido.
        DIVIDOR -> Número pelo qual o dividendo será dividido, ou seja, número que divide o dividendo.
        QUOCIENTE  -> Resultado da divisão.
        RESTO -> É o resto da divisão, ou seja, a parte que não pode ser dividida. */

 const quociente = (dividendo, divisor) => {
    let resultado = dividendo / divisor
    let resto = dividendo % divisor
    return `Resultado = ${resultado.toFixed()}\nResto = ${resto}`
 }

 console.log(quociente(10, 3))