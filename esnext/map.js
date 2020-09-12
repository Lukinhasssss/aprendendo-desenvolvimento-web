const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: false })

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)
console.log('--------------------')

// Criando map já atribuindo elementos
const chavesVariadas = new Map([
    [function() {}, 'Função'], // function como chave e valor como texto
    [{}, 'Objeto'], // objeto como chave e o segundo é uma string
    [123, 'Número'] // um número e uma string
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})
console.log('----------------------')

console.log(chavesVariadas.has(123)) // Função que diz se um elemento está ou não contido dentro desse map | OBS: has == tem
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // Diz quantos elementos estão presentes no map | OBS: size == tamanho
console.log('------------------')

// OBS: chave não aceita repetição
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)