/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const jurosSimples = (capitalInicial, taxaDeJuros, tempoDeAplicação) => {
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicação)
}

const jurosCompostos = (capitalInicial, taxaDeJuros, tempoDeAplicação) => {
    return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicação
}

console.log(jurosSimples(70000, 0.105, 145/360).toFixed(2))
console.log(jurosCompostos(70000, 0.105, 145/360).toFixed(2))

console.log('-----------------------------')

console.log(jurosSimples(20000, 0.01, 12).toFixed(2))
console.log(jurosCompostos(20000, 0.01, 12).toFixed(2))