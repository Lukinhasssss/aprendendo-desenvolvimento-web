const pai = { nome: 'Lucas', corCabelo: 'preto' }

const filha1 = Object.create(pai) // Cria um objeto novo tendo como protótipo o objeto pai
filha1.nome = 'Asuna'
console.log(filha1.corCabelo)
console.log('------------------')

const filha2 = Object.create(pai, {
    nome: { value: 'Sakura', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Hinata'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log('------------------')

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
console.log('------------------')

for (let key in filha2) { // Para cada 'chave' em filha2
    filha2.hasOwnProperty(key) ? // a propriedade de filha2 pertence a ela ???      // filha2 tem sua própria propriedade ???
        console.log(key) : console.log(`Por herança: ${key}`)
}