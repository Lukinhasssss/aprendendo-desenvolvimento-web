/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console. */


const negativos_e_positivos = vetor => {
    let negativos = 0
    let positivos = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++
        } else {
            positivos++
        }
    }

    return `${negativos} números negativos. \n${positivos} números positivos.`

}

let vetor = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, -35, 8, -19, 9, -21, 10]
console.log(negativos_e_positivos(vetor))