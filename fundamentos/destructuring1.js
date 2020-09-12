// Novo recurso do ES2015 (ES6)
// Destructuring: Serve para desestruturar uma estrutura. Serve para extrair dados de uma estrutura.

const pessoa = {
    nome: 'Lucas Monteiro',
    idade: 22,
    endereco: {
        logradouro: 'Rua dos Lírios',
        numero: 57
    }
}

const { nome, idade } = pessoa // Extrai nome e idade da estrutura pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n , i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)