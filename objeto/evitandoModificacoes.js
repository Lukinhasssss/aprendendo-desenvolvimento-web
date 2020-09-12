// Object.preventExtensions --> Previne que o objeto seja extendido, ou seja, não será possível aumentar o número de atributos desse objeto, mas será possível alterar e excluir atributos que já foram adicionados
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)
console.log('-----------------------------------')

// Object.seal --> Sela um objeto. Quando um objeto é selado não é possível adicionar novos atributos, nao é possível excluir atributos do objeto, mas é possível modificar os atributos do objeto
const pessoa = { nome: 'Lucas', idade: 22 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed())

pessoa.sobrenome = 'Monteiro'
delete pessoa.nome
pessoa.idade = 32
console.log(pessoa)
console.log('-----------------------------------')

// Object.freeze --> Selado + Valores Constantes. Não é possível excluir, adicionar e nem modificar atributos do objeto