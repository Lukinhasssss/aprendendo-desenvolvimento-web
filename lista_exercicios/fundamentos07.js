/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
 * elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
 * parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
 * -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
 * que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
 * “Delta é negativo”.
 * 
 * FÓRMULA DE BHASKARA: x = -b + (Math.sqrt(delta)) / (2 * ax2) */


const formulaDeBhaskara = (ax2, bx, c) => {
    let delta = (bx ** 2) - (4 * ax2 * c)
    
    if (delta < 0) {
        return 'Delta é negativo!'
    }
    
    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
    
    let resultado = []
    resultado.push(x1)
    resultado.push(x2)

    return `x1 = ${resultado[0]} e x2 = ${resultado[1]}`
}

console.log(formulaDeBhaskara(1, 3, 2))
console.log(formulaDeBhaskara(3, -5, 12))
console.log('------------------------')

// OUTRA FORMA DE FAZER:

const formulaDeBhaskara2 = (a, b, c) => {
    let delta = (b ** 2) - (4 * a * c)

    if (delta < 0) {
        return 'Delta é negativo!'
    }

    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)

    let resultado = []
    resultado.push(x1.toFixed(2))
    resultado.push(x2.toFixed(2))

    return resultado
}

console.log(formulaDeBhaskara2(1, 3, 2))
console.log(formulaDeBhaskara2(3, 6, 2))