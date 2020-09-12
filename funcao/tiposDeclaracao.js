console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
} // Funções declaradas dessa forma podem ser usadas, por exemplo, no final do código, pois o interpretador primeiro lê as funções.

// function expression
const subtracao = function (x, y) {
    return x - y
}
console.log(subtracao(3, 4))

// named function expression
const multiplicacao = function multiplicacao(x, y) {
    return x * y
}
console.log(multiplicacao(3, 4))