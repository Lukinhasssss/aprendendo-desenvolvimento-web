// Objeto é uma coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Xbox Series X'
produto['marca do produto'] = 'Microsoft'
produto.preco = 2800
// produto.preco = `R$${2800}` --> Também pode ser feito desta forma para ficar com o símbolo da moeda

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)
console.log('--------------------------')

const carro = {
    modelo: 'Civic',
    valor: 89000,
    proprietario: {
        nome: 'Lucas Monteiro de Oliveira',
        idade: 22,
        endereco: {
            rua: 'Dos Lírios',
            numero: 322,
            bairro: 'Piraporinha',
            cidade: 'Diadema',
            uf: 'SP'
        }
    },
    condutores: [{
        nome: 'José Carlos De Oliveira',
        idade: 53
    }, {
        nome: 'Marcia Maria Monteiro Oliveira',
        idade: 49
    }],
    calcularValorDoSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 57
carro['proprietario']['endereco']['rua'] = 'Rua dos Lírios'
console.log(carro)
console.log('------------------------------')

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)
console.log(carro.condutores)
console.log(`Número de condutores: ${carro.condutores.length}`) // Obs: Se tentar acessar o atributo de algo que esteja indefinido o programa dará erro
// condutores.length --> Significa o número de condutores