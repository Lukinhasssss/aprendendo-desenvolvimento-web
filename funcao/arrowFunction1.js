let dobro = function (a) {
    return 2 * a
}

// A FUNÇÃO arrow É UMA FUNÇÃO ANÔNIMA ENTÃO PARA CHAMA-LA É PRECISO ARMAZENA-LA EM UMA VARIÁVEL
dobro = (a) => { return 2 * a } // Essa é a mesma função de cima mas feita com uma arrow function

dobro = a => 2 * a // Essa é uma forma  mais reduzida para fazer a função arrow e é indicada quando se tem somente uma linha. OBS: Quando não se usa chaves o retorno é implícito
console.log(dobro(Math.PI)) // Pega o dobro de PI

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um parâmetro
console.log(ola())