/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
 * deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
 * deles estão fora do intervalo, escrevendo estas informações. */


const intervalo = (vetor) => {
    let dentroDoIntervalo = 0
    let foraDoIntervalo = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentroDoIntervalo++
        } else {
            foraDoIntervalo++
        }
    }

    return `${dentroDoIntervalo} números estão dentro do intervalo [10,20]. \n${foraDoIntervalo} números estão fora do intervalo [10,20]`

}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
console.log(intervalo(vetor))