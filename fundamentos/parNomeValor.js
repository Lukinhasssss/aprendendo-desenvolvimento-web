// par chave/valor
// Chave = saudacao; valor = 'Falaaa'
const saudacao = 'Opa' // Contexto léxico 1: Local onde a variável foi definida fisicamente no código

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2 
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const Cliente = {
    nome: 'Lucas Monteiro',
    idade: 22,
    peso: 60,
    endereço: {
        logradouro: 'Rua dos Lírios',
        numero: 57
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)