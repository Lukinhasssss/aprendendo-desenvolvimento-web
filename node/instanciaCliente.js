const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // Os parênteses invocam a função factory que está no arquivo 'instanciaNova'
const contadorD = require('./instanciaNova')()

contadorA.incrementarValor()
contadorA.incrementarValor()
console.log(contadorA.valor, contadorB.valor)

contadorC.incrementarValor()
contadorC.incrementarValor()
console.log(contadorC.valor, contadorD.valor)