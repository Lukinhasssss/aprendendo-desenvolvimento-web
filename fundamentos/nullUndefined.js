let valor // Não inicializada
console.log(valor)

valor = null // Null = Ausência de Valor. Nesse ponto, a variável valor foi definida dizendo que ela não aponta para nenhum local de memória
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // Essa é a melhor forma de tirar um atributo de um objeto
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)

// PARA ZERAR UMA VARIÁVEL DO TIPO REFERÊNCIA, QUE APONTA PARA UM OBJETO, APONTA PARA UMA FUNÇÃO, VOCÊ VAI LÁ E COLOCA O NULO

