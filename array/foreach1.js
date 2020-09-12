const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { // A função recebe 2 parâmetros: o 1° parâmetro é o elemento que eu estou percorrendo e o 2° parâmetro é o índice do elemento que está sendo executado no momento
    console.log(`${indice + 1}) ${nome}`) // Para cada elemento do array essa função será chamada
})
console.log('-------------------------')

aprovados.forEach(nome => console.log(nome)) // ACESSA SOMENTE OS ELEMENTOS DO ARRAY
console.log('-------------------------')

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)