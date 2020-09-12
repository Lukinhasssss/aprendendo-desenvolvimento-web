/* Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */


const helloWorld = () => {
    aux = 1
    while (aux <= 11) {
        console.log(`${aux}) Hello World!!!`)
        aux++
    }
}

helloWorld()