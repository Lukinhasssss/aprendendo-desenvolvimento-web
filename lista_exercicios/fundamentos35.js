/* Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
 * inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
 * e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
 * final das operações imprima os vetores no console. */


let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

// Resposta correta do exercício
const adicionaVetor = (vetorInicial, vetorAdicionar) => {
    for (let i = 0; i < vetorAdicionar.length; i++) {
        console.log(vetorAdicionar[i])
        vetorInicial.push(vetorAdicionar[i])
    }

    console.log(`Vetor adicionado: ${vetorAdicionar}`)
    console.log(`Vetor resultado: ${vetorInicial}`)
}

adicionaVetor(vetorPilha, vetorAdiciona)

console.log('-------------------------')

// Resposta errada do exercício, mas que junta os dois vetores
function juntaVetores (...args) {
    juntaVetores = []
    for (let i = 0; i < arguments.length; i++) {
        juntaVetores = juntaVetores.concat(arguments[i])
    }

    return `O resultado da junção dos vetores é: ${juntaVetores}`

}

console.log(juntaVetores(vetorPilha, vetorAdiciona))