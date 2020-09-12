/* Fazer um programa para encontrar todos os pares entre 1 e 100. */


const numerosPares = () => {

    for (let numero = 1; numero <= 100; numero++){
        if (numero % 2 == 0) {
            console.log(numero)
        }
    }
}

numerosPares()
console.log('-----------------------')

// Outra forma de fazer (Para números entre 0 e 100)
const numerosPares2 = () => {

    for (let numero = 0; numero <= 100; numero = numero + 2) {
        console.log(numero)
    }
}

numerosPares2()