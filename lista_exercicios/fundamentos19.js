/* O cardápio de uma lanchonete é o seguinte:
 *
 *     Código          Descrição do Produto          Preço
 *      100               Cachorro Quente           R$ 3,00
 *      200              Hambúrguer Simples         R$ 4,00
 *      300                Cheeseburguer            R$ 5,50
 *      400                    Bauru                R$ 7,50
 *      500                 Refrigerante            R$ 3,50
 *      600                    Suco                 R$ 2,80
 * 
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
 * a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
 * comando switch. Crie um caso default para produto não existente. */


const cardapio = (codigoDoPedido, quantidade) => {
    cachorroQuente = 3.00
    hamburguerSimples = 4.00
    cheeseburguer = 5.50
    bauru = 7.50
    refrigerante = 3.50
    suco = 2.80

    switch (codigoDoPedido) {
        case 100:
            return `Total a pagar = R$${(quantidade * cachorroQuente).toFixed(2)}`
        case 200:
            return `Total a pagar = R$${(quantidade * hamburguerSimples).toFixed(2)}`
        case 300:
            return `Total a pagar = R$${(quantidade * cheeseburguer).toFixed(2)}`
        case 400:
            return `Total a pagar = R$${(quantidade * bauru).toFixed(2)}`
        case 500:
            return `Total a pagar = R$${(quantidade * refrigerante).toFixed(2)}`
        case 600:
            return `Total a pagar = R$${(quantidade * suco).toFixed(2)}`
        default:
            return `Produto não existe`
    }
}

console.log(cardapio(100, 4))
console.log(cardapio(200, 2))
console.log(cardapio(300, 3))
console.log(cardapio(400, 1))
console.log(cardapio(500, 2))
console.log(cardapio(600, 2))
console.log(cardapio(700, 1))