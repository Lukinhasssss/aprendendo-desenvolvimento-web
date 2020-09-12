const filhas = ['Asuna', 'Sakura']
const filhos = ['Kirito', 'Hiroto']
const todos = filhas.concat(filhos, 'Jaden')
console.log(todos, filhas, filhos)
console.log('-------------------------')

console.log([].concat([1, 2], [3, 4], 5, [
    [6, 7]
]))