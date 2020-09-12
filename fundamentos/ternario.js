const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Se nota >= 7 Aprovado. Senão Reprovado

console.log(resultado(7.1))
console.log(resultado(6.7))

/* Operador ternário é composto por 3 Partes
        1ª Uma expressão que irá retornar sempre Verdadeiro ou Falso ?
        2ª O Resultado da expressão caso ela seja verdadeira : 
        3ª O resultado da expressão caso ela seja falsa
*/