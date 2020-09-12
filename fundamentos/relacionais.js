console.log('01)', '1' == 1) // Verdadeiro se 'a' for igual 'b'
console.log('02)', '1' === 1) // Verdadeiro se 'a' for igual a 'b' e do mesmo tipo 
console.log('03)', '3' != 3) // Verdadeiro se 'a' for diferente de 'b'
console.log('04)', '3' !== 3) // Verdadeiro se 'a' for diferente de 'b' ou se não forem do mesmo tipo

console.log('-----------------------')

console.log('05)', 3 < 2) // Verdadeiro se 'a' for menor do que 'b'
console.log('06)', 3 > 2) // Verdadeiro se 'a' for maior do que 'b'
console.log('07)', 3 <= 2) // Verdadeiro se 'a' for menor ou igual a 'b'
console.log('08)', 3 >= 2) // Verdadeiro se 'a' for maior ou igual a 'b'

console.log('-----------------------')

const d1 = new Date(0) // O zero significa data de referência no JS que 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 == d2) // Tanto faz no caso 09 ou no caso 10 vai dar falso pois esta comparando endereços de memória
console.log('10)', d1 === d2)
console.log('11)', d1.getTime() === d2.getTime()) // Neste cado dará verdadeiro pois os dois são numbers. Possuem o mesmo tipo e o mesmo valor

console.log('-----------------------')

console.log('12)', undefined == null)
console.log('12)', undefined === null)