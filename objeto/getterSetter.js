// Get --> Lê o valor de uma variável.
// -----------------------------------------
// Set --> Altera o valor de uma variável.

const sequencia = {
    _valor: 1, // Convensão. É somente um jeito de deixar explicado que a variável é pretendida ser acessada internamente dentro desse objeto sequencia.
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)