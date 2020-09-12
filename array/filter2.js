Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Xbox Series X', preco: 3200, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
    { nome: 'Caixa de Chococlate', preco: 9.99, fragil: false }
]


// UTILIZANDO .filter() PARA PRODUTOS FRÁGEIS E COM PREÇO MAIOR OU IGUAL À R$500
console.log(produtos.filter2(function(p) {
    return p.preco >= 500 && p.fragil // Retorna somente if preço >= 500 && fragil == true
}))
console.log('-------------------------------------------------------------')


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))