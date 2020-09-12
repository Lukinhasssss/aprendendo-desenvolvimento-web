const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {  // Math.floor() arredonda a nota para baixo.  Math.ceil() arredonda a nota para cima
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida!')
    }
}

imprimirResultado(10)
imprimirResultado(8.9) // Como o Math.floor() arredonda a nota para baixo, a nota vai para 8 entra no case 8 e o aluno é Aprovado
imprimirResultado(6.55) // Como o Math.floor() arredonda a nota para baixo, a nota vai para 6 entra no case 6 e o aluno entra em Recuperação
imprimirResultado(2.3) // Como o Math.floor() arredonda a nota para baixo, a nota vai para 2 entra no case 2 e o aluno é Reprovado
imprimirResultado(-1) // Como a nota digitada não está entre 0 e 10 (nota >= 0 || nota <= 10) o switch entra no Default e aparece na tela Nota Inválida!
imprimirResultado(11) // Como a nota digitada não está entre 0 e 10 (nota >= 0 || nota <= 10) o switch entra no Default e aparece na tela Nota Inválida!