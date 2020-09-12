// pessoa --> Endereço de Memória(123) --> {...}
const pessoa = { nome: 'Lucas' }
pessoa.nome = 'Lukinhasssss'
console.log(pessoa)

// pessoa --> Endereço de Memória(456) --> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)
// Depois que se utiliza o Object.freeze() não é mais possível alterar, adicionar e nem deletar um atributo do objeto

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua dos Lirios'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)
console.log('-----------------------')

const pessoaConstante = Object.freeze({ nome: 'Lucas Monteiro de Oliveira' }) // Dessa forma é possível criar diretamente um objeto constante
console.log(pessoaConstante)