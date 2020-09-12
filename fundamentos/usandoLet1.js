// var numero = 1
let numero = 1
{
    let numero = 2     // A variável 'let' tem escopo de bloco!!!
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

// Se substituir por 'var' por 'let' tambem não haverá conflito!!!

// !!! Variáveis definidas com a palavra 'var' tem ESCOPO GLOBAL e ESCOPO DE FUNÇÃO !!!
// !!! Variáveis definidas com a palavra 'let' tem ESCOPO GLOBAL, ESCOPO DE FUNÇÃO e ESCOPO DE BLOCO !!!