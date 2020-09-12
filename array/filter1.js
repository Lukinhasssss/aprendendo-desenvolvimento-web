// .filter() --> SERVE PARA FILTRAR UM ARRAY, POR EXEMPLO: TODOS OS ALUNOS COM NOTA < 7 | TODOS OS PRODUTOS QUE ESTÃO MARCADOS COM FRÁGIL | OS CLIENTES QUE ESTÃO EM DÉBITO COM A EMPRESA...

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Xbox Series X', preco: 3200, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
    { nome: 'Caixa de Chococlate', preco: 9.99, fragil: false }
]

console.log(produtos.filter(function(p) { // 'p' representa cada um dos elementos que estou passando para a função filter
    return false
}))
console.log('-------------------------------------------------------------')


// UTILIZANDO .filter() PARA PRODUTOS FRÁGEIS E COM PREÇO MAIOR OU IGUAL À R$500
console.log(produtos.filter(function(p) {
    return p.preco >= 500 && p.fragil // Retorna somente if preço >= 500 && fragil == true
}))
console.log('-------------------------------------------------------------')


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))