function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` // Se não for um valor numérico retorna simplesmente o valor. Se for um valor numérico formata ele em template String
        resultado.push(partes[indice], valor)
    })
    return resultado.join('') // Pega todos os elementos do array resultado e vai gerar a String no final.
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)