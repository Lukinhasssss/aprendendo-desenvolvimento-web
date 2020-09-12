const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Pega todas as chaves de um determinado objeto
console.log('----------------------------')
console.log(Object.values(pessoa)) // Pega todos os valores de um determinado objeto
console.log('----------------------------')
console.log(Object.entries(pessoa)) // Retorna um array com todas as chaves/valores de um determinado objeto
console.log('----------------------------')

Object.entries(pessoa).forEach(e => { // Vai percorrer os elementos(e) do array que foi gerado a partir de Object.entries(pessoa).forEach
    console.log(`${e[0]}: ${e[1]}`)
})
console.log('----------------------------')

// Outra forma mais intuitiva de fazer o exemplo acima utilizando o destructuring
Object.entries(pessoa).forEach(([chave, valor]) => { // ([chave, valor]) => está desestruturando o array
    console.log(`${chave}: ${valor}`)
})
console.log('----------------------------')

Object.defineProperty(pessoa, 'dataDeNascimento', { // Primeiro eu defino qual o objeto que eu quero incluir uma propriedade. Segundo, defino o nome da propriedade. E por fim eu passo um objeto que vai ter todas as características dessa propriedade
    enumerable: true,
    writable: false, // writable: Quer dizer se a propriedade aceita ser modificada
    value: '03/03/2020'
})

pessoa.dataDeNascimento = 01/01/2000
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))
console.log('----------------------------')

// Object.assign (ECMAScript 2015) ES6
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const objetoResultante = Object.assign(destino, o1, o2) // O primeiro parâmetro recebe os atributos dos objetos dos parâmetros seguintes
console.log(objetoResultante)

Object.freeze(objetoResultante)
objetoResultante.c = 1234
console.log(objetoResultante)