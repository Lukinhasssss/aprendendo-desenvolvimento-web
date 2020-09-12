/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo). */

const tipoTriangulo = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'O triângulo é Equilátero'
    } else if (lado1 != lado2 && lado2 != lado3) {
        return 'O triângulo é Escaleno'
    } else {
        return 'O triângulo é Isósceles'
    }
}

console.log(tipoTriangulo(7, 7, 7))
console.log(tipoTriangulo(3, 3, 6))
console.log(tipoTriangulo(1, 2, 3))