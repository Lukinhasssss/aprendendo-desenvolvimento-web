function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // Random gera um valor entre 0 e 1, multiplicando isso pelo intervalo vai dar um range maior e finalmente, para ficar no valor que eu quero eu preciso deslocar o valor obtido pelo mínimo para que ele possa chegar no mínimo até o máximo
    return Math.floor(valor) // Arredonda o valor para baixo
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')