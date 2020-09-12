const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in numeros) { // 'x' é o índice do array
    if (x == 5) {
        break
    }
    console.log(`${x} = ${numeros[x]}`) // `índice ${x} = número do array ${numero[x]}`
}

console.log('-------------------------')

for (y in numeros) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${numeros[y]}`)
}

console.log('-------------------------')

// Rótulo
externo: for (a in numeros) { // Você acabou de atribuir a este rótulo o nome 'externo'
    for (b in numeros) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
} // O Rótulo fica associado ao laço 'for'.

// O rótulo serve, por exemplo, para indicar qual laço é o interno e qual laço é o externo.