const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Extraindo as notas menores do que 7 (Sem callback)
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]) // Para adicionar um elemento no array
    }
}

console.log(notasBaixas1)
console.log('----------------------------')

// Extraindo as notas menores do que 7 (Usando callback)
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)
console.log('----------------------------')

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
console.log('----------------------------')

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)