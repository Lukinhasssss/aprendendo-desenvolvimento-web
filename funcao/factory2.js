function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Xbox', 1750.00))
console.log(criarProduto('PlayStation 5', 2100.00))
console.log(criarProduto('Notebook Dell', 3799.99))
console.log(criarProduto('OnePlus 7t Pro', 2499.99))