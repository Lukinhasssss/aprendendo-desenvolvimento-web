/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
 * considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
 * de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
 * idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130. */


const valor_do_plano_de_saude = idade => {
    valor_sem_adicional = 100
    if (idade < 10) {
        return `Valor a ser pago = R$${valor_sem_adicional + 80},00`
    } else if (idade < 30) {
        return `Valor a ser pago = R$${valor_sem_adicional + 50},00`
    } else if (idade <= 60) {
        return `Valor a ser pago = R$${valor_sem_adicional + 95},00`
    } else if (idade > 60) {
        return `Valor a ser pago = R$${valor_sem_adicional + 130},00`
    }
}

console.log(valor_do_plano_de_saude(7))
console.log(valor_do_plano_de_saude(22))
console.log(valor_do_plano_de_saude(60))
console.log(valor_do_plano_de_saude(81))