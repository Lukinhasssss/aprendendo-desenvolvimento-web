// Função em JS é First-Class Object || First-Class Citizens
// Higher-order function (Função de Alta Ordem)

// Criando função de forma literal
function funcao1() { }

// Armazenando uma função em uma variável
const funcao2 = function () { }

// Armazenando uma função dentro de um array
const array = [function (a, b) { return a + b }, funcao1, funcao2] // Posso declarar a função dentro do array se for preciso
console.log(array[0](2, 3))

// Armazenando uma função dentro de atributos de objetos
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passando função como parâmetro para outra função
function run(funcao) {
    funcao()
}

run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(2)
const cincoMais = soma(2, 3)
cincoMais(2)