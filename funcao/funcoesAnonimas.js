// Armazenando uma função anônima dentro de uma variável
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { // Recebe três parâmetro: o parâmetro a, o parâmetro b e um terceiro parâmetro que vai operar em cima dos parâmetros a e b que por padrâo vai receber o resultado de soma
    console.log(`O resultado é ${operacao(a, b)}`)
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log("Hello!")
    }
}

pessoa.falar()