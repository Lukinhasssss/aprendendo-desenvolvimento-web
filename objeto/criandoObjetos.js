// Usando a notação literal
const obj1 = {}
console.log(obj1)
console.log('------------------')

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
console.log('------------------')

// Funções Construtoras
function Produto (nome, preco, desconto) {
    this.nome = nome // this deixa a variável visível fora do objeto // this faz com que o atributo seja público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const produto1 = new Produto ('Xbox Series X', 2800, 0.1)
const produto2 = new Produto ('Notebook', 2998.99, 0.25)
console.log(produto1.getPrecoComDesconto(), produto2.getPrecoComDesconto().toFixed(2))
console.log('------------------')

// Função Factory ---> Função que retorna um objeto
function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase/30) * (30 - faltas)).toFixed(2)
        }
    }
}

const funcionario1 = criarFuncionario('Lucas', 6200, 2)
const funcionario2 = criarFuncionario('Maria', 11400, 1)
console.log(funcionario1.getSalario(), funcionario2.getSalario())
console.log('------------------')

// Object.create
const filha = Object.create(null)
filha.nome = 'Hindiara'
console.log(filha)
console.log('------------------')

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)