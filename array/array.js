console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Essa forma de criar array não é muito recomendada
console.log(aprovados)
console.log('-------------------------')

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log('-------------------------')

aprovados[3] = 'Paulo' // Essa é uma forma válida de adicionar novos elementos em um array mas ela é mais comum para substituir o elemento de um array
aprovados.push('Lucas') // Essa é a forma mais apropriada de adicionar novos elementos em um array. Sempre adiciona elementos na última posição do array
console.log(aprovados.length) // length --> retorna o tamanho do array. Neste caso, por exemplo, retorna 5, ou seja, o array possui 5 elementos
console.log('-------------------------')

aprovados[9] = 'Rafael' // É possível fazer isso mas os arrays de posição 5, 6, 7 e 8 ficarão como undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
console.log('-------------------------')

aprovados.sort() // .sort --> Ordena o array. OBS: Não altera o array original
console.log(aprovados)
console.log('-------------------------')

delete aprovados[1] // Exclui o elemento de índice 1 do array
console.log(aprovados[1])
console.log(aprovados[2])
console.log('-------------------------')

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // O primeiro elemento quer dizer qual o índice que você quer trabalhar, por exemplo: A partir do índice 1 vai excluir 1 elemento e adicionar o Elemento1 e o Elemento2
    // .splice --> Serve para adicionar elementos em um determinado índice, remover elementos de um array e remover e adicionar elementos ao mesmo tempo
console.log(aprovados)