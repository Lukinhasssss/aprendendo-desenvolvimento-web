// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // Nesse caso o zero retorna falso e da errado
console.log('-------------------------------')

// Estratégias 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // Se 'a' for !== de undefined ele vai pegar o próprio valor de 'a' // E se 'a' for == undefined, ou seja, se eu não passar o valor de 'a', então a == 1
    b = 1 in arguments ? b : 1 // Dentro de arguments existe o índice 1 ??? Se existir pegue o valor de 'b' senão pegue o valor padrão
    c = isNaN(c) ? 1 : c // Se a variável for NaN retorne o valor padrão e caso ela seja um número retorna o valor de 'c' (o valor do número)
    // De todas as estratégias a mais segura é a 'c'
    return a + b + c
}

console.log(soma2(), soma2(3), soma1(1, 2, 3), soma2(0, 0, 0), soma2(0, 2, 19))
console.log('-------------------------------')

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2(), soma2(3), soma1(1, 2, 3), soma2(0, 0, 0), soma2(0, 20))