const pilotos = ['Vettel', 'Alonso', 'Raikonnen', 'Massa']

pilotos.pop() // .pop() --> Remove o último elemento do array
console.log(pilotos)
console.log('----------------------------------')

pilotos.push('Verstappen') // .push() --> Adiciona elemento na última posição do array
console.log(pilotos)
console.log('----------------------------------')

pilotos.shift() // .shift() --> Remove o primeiro elemento do array
console.log(pilotos)
console.log('----------------------------------')

pilotos.unshift('Hamilton') // .unshift() --> Adiciona o elemento na primeira posição, ou seja, no índice [0]
console.log(pilotos)
console.log('----------------------------------')

// .splice() --> Pode adicionar e/ou remover elementos dentro de um array

// ADICIONAR
pilotos.splice(2, 0, 'Bottas', 'Massa') // Vou adicionar a partir do índice [2]
console.log(pilotos)
console.log('----------------------------------')

// REMOVER
pilotos.splice(3, 1) // A partir do indice [3] eu vou remover 1 elemento
console.log(pilotos)
console.log('----------------------------------')

// .slice() --> Retorna um novo array
const algunsPilotos1 = pilotos.slice(2) // Gera um novo array a partir do índice [2]
console.log(algunsPilotos1)
console.log('----------------------------------')

const algunsPilotos2 = pilotos.slice(1, 4) // Gera um novo array a partir do índice [1] até o índice [4 - 1], ou seja, o índice [4] não sera imprimido
console.log(algunsPilotos2)