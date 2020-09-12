console.log(Math.ceil(6.1)) // Faz um arredondamento para cima.
console.log(Math.floor(6.1)) // Faz um arredondamento pra baixo.

const obj1 = {} // A notação '.' cria dinâmicamente um atributo para um objeto ou acessa um atributo já existente.
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // Também pode ser criado desse jeito.
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // Como foi utilizada a palavra reservada 'this' a variável poderá ser utilizada fora da função.
    this.exec = function() {
        console.log('Exec...')
    }
}
const obj2 = new Obj('Cadeira'/* Que sera atribuída ao objeto this.nome*/)
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()