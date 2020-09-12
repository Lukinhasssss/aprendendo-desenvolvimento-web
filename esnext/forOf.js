for (let letra of 'Cod3r') {
    console.log(letra)
}
console.log('---------------------------')

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}
console.log('---------------------------')

const assuntosMap = new Map([
    ['Map', { abortado: true }],
    ['Set', { abortado: true }],
    ['Promise', { abortado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}
console.log('---------------------------')

for (let chave of assuntosMap.keys()) { // Para imprimir somente as chaves
    console.log(chave)
}
console.log('---------------------------')

for (let valor of assuntosMap.values()) { // Para imprimir somente os valores
    console.log(valor)
}
console.log('---------------------------')

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}
console.log('---------------------------')

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}