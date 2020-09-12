const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!!!') // Tomar cuidado com este tipo de situação, pois aqui deveria dar um erro mais não da pela linguagem ser fracamente tipada