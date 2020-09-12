// Arrow Function --> ES6(2015)
const soma = (a, b) => a + b // OBS: Quando se tem apenas um parâmetro não é obrigatório o uso dos parênteses
console.log(soma(19.3, 20.8))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro Default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// Operador Rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3))