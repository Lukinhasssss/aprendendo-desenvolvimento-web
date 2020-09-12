// PRIMEIRO EU VOU CRIAR UM PEQUENO OBJETO QUE VAI REPRESENTAR UMA SEQUÊNCIA PRA EU PEGAR OS IDS DOS OBJETOS QUE EU VOU PERSISTIR
const sequence = {
    _id: 1, // OBS --> _ É só uma convensão para indicar que o atributo é interno
    get id() { return this._id++ } // Vai sempre retorna o próximo valor de _id quando eu fizer sequence.id
}

const produtos = {}
    // O objeto acima vai ter como 'chave' cada um dos ids de cada um dos produtos, ou seja, esse objeto vai ter como chave o id do produto e vai ter como valor o próprio objeto produto com nome e preço

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id // Se o id do produto não estiver setado --> produto.id = sequence.id
    produtos[produto.id] = produto // produtos vai ter como chave o id e vai receber como valor o produto
    return produto
}

// Criando função para pegar produto por id
function getProduto(id) {
    return produtos[id] || {} // retorna produtos[id] ou caso esteja nulo ou undefined retorna um objeto vazio
}

// Criando função que vai retornar todos os produtos
function getProdutos() {
    return Object.values(produtos) // Vai retorna apenas os valores
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

// Exportando as funções:
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }