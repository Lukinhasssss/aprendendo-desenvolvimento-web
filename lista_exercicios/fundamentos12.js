/* Faça um algoritmo que calcule o fatorial de um número.
 *
 * FÓRMULA: n! = n . (n – 1).(n – 2) … 3 . 2 . 1 */

const fatorial = numero => {
    if (numero == 0) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
console.log(fatorial(9))