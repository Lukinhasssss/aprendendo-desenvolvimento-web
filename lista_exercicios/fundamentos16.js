/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
 * como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
 * numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
 * 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

const calculadoraBasica = (valor1, operacao, valor2) => { 
    switch (operacao) {
        case '+':
            return `${valor1} + ${valor2} = ${valor1 + valor2}`
        case '-':
            return `${valor1} - ${valor2} = ${valor1 - valor2}`
        case '*':
            return `${valor1} * ${valor2} = ${(valor1 * valor2).toFixed(2)}`
        case '/':
            return `${valor1} / ${valor2} = ${(valor1 / valor2).toFixed(2)}`
        default:
            return `${operacao} não é uma operação válida`
    }
}

console.log(calculadoraBasica(7, '+', 2))
console.log(calculadoraBasica(9, '-', 3))
console.log(calculadoraBasica(7, '*', 3))
console.log(calculadoraBasica(10, '/', 3))
console.log(calculadoraBasica(3, '!', 2))