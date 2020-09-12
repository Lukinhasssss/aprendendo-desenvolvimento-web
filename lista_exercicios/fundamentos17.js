/* Um funcionário irá receber um aumento de acordo com o seu plano de
 * trabalho, de acordo com a tabela abaixo:
 *
 * Plano Aumento
 *   A     10%
 *   B     15%
 *   C     20%
 * 
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
 * novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumento(plano, salario) {
    switch(plano) {
        case 'A':
            return `Seu novo salário é de R$${salario + (salario * 0.1)} e seu aumento foi de R$${(salario * 0.1).toFixed(2)}`
        case 'B':
            return `Seu novo salário é de R$${salario + (salario * 0.15)} e seu aumento foi de R$${(salario * 0.15).toFixed(2)}`
        case 'C':
            return `Seu novo salário é de R$${salario + (salario * 0.2)} e seu aumento foi de R$${(salario * 0.2).toFixed(2)}`
        default:
            return 'O plano é inválido!'
    }
}

console.log(aumento('A', 1000))
console.log(aumento('B', 2792))
console.log(aumento('C', 7320))
console.log(aumento('D', 3210))