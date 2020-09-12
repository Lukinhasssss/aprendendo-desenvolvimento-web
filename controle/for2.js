const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { // Para cada i em notas...
    console.log(i, notas[i]) // Imprima i (índice/posição do vetor), notas[i] = conteúdo que está dentro de cada índice 
}

console.log('-----------------')

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Monteiro',
    idade: 22,
    peso: 60
}

for (let atributo in pessoa) { // Para cada atributo em pessoa...
    // console.log(atributo + '=' + pessoa[atributo]) // Imprima atributo, conteúdo do atributo
    console.log(atributo, '=', pessoa[atributo]) // Utilizando a ',' concatena com espaço e utilizando '+' concatena sem espaço
}

// O ideal é sempre usar o let para que depois você não tenha acesso ao 'atributo' ou 'i' por exemplo.