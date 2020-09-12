/* Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
 * casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
 * escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o Kg”. Teste com estas três opções .Crie
 * também um default, que retornará uma mensagem de erro no console. */

const fruta = nomeDaFruta => {
    switch(nomeDaFruta) {
        case 'maçã':
            return `Não vendemos esta fruta aqui`
        case 'kiwi':
            return `Estamos com escassez de Kiwi`
        case 'melancia':
            return `Aqui está, são R$3,00 o Kg`
        default:
            return `Erro, Fruta Inválida!!!`
    }
}

console.log(fruta('maçã'))
console.log(fruta('kiwi'))
console.log(fruta('melancia'))
console.log(fruta('picanha'))