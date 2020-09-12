/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
 * para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
 * Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
 * informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
 * nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */


const sacarDinheiro = valorDoSaque => {
    let contador100 = 0
    let contador50 = 0
    let contador20 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorDaNota = calcularValorDaNota(valorDoSaque)

    while (valorDoSaque >= valorDaNota) {
        switch (valorDaNota) {
            case 100:
                valorDoSaque -= 100
                contador100++
                break
            case 50:
                valorDoSaque -= 50
                contador50++
                break
            case 20:
                valorDoSaque -= 20
                contador20++
                break
            case 10:
                valorDoSaque -= 10
                contador10++
                break
            case 5:
                valorDoSaque -= 5
                contador5++
                break
            case 1:
                valorDoSaque -= 1
                contador1++
                break
        }

        valorDaNota = calcularValorDaNota(valorDoSaque)

    }

    return resultado(contador100, contador50, contador20, contador10, contador5, contador1)

}

const calcularValorDaNota = valorDoSaque => {
    if (valorDoSaque >= 100) {
        return 100
    } else if (valorDoSaque >= 50) {
        return 50
    } else if (valorDoSaque >= 20) {
        return 20
    } else if (valorDoSaque >= 10) {
        return 10
    } else if (valorDoSaque >= 5) {
        return 5
    } else if (valorDoSaque >= 1) {
        return 1
    }
}

const resultado = (contador100, contador50, contador20, contador10, contador5, contador1) => {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100,00.\n`
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50,00.\n`
    }

    if (contador20 > 0) {
        resultado += `${contador20} nota(s) de R$ 20,00.\n`
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10,00.\n`
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5,00.\n`
    }
    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1,00.\n`
    }

    return resultado

}

console.log(sacarDinheiro(372))