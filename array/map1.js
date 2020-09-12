// .map() --> GERA UM NOVO ARRAY COM NOVOS DADOS MAS COM O MESMO TAMANHO

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado) // OBS: .map() NÃO TRANSFORMA O ARRAY ATUAL ELE SOMENTE GERA UM NOVO ARRAY
console.log(nums)
console.log('-----------------------------')

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // .replace() TROCA O PRIMEIRO PARÂMETRO PELO SEGUNDO, OU SEJA, SUBSTITUI O '.' POR ','

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)