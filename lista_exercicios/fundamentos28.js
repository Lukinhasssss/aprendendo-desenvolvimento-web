/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */


const quantidadeDeParImpar = vetor => {
    let quantidadeDePares = 0
    let quantidadeDeImpares = 0
    
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            quantidadeDePares++
        } else {
            quantidadeDeImpares++
        }
    }
    
    return `${quantidadeDePares} números pares e ${quantidadeDeImpares} números ímpares.`
    
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
console.log(quantidadeDeParImpar(vetor))