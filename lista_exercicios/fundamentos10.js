/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false . */

const divisao = numeroInteiro => {
    if (numeroInteiro % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(divisao(3))
console.log(divisao(6))
console.log(divisao(12))
console.log(divisao(11))
console.log(divisao(5))
console.log(divisao(2))