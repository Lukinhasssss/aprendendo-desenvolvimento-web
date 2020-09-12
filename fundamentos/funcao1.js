// FUNÇÃO SEM RETORNO

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

console.log("----------------------")

// FUNÇÃO COM RETORNO
// OBS: ESSA FUNÇÃO NÃO IMPRIME DIRETAMENTE NO CONSOLE. FUNÇÃO SEM RETORNO IMPRIME!!! FUNÇÃO COM RETORNO NÃO IMPRIME!!!
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())