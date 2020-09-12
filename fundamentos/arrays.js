const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // Pega o primeiro elemento (índice 0) e o quarto elemento (índice 3)
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // Length diz quantos elementos há no array

valores.push({id: 3}, false, null, 'teste') // Push adiciona novos elementos no array
console.log(valores)

console.log(valores.pop()) // Exclui o último valor do array e o retorna
delete valores[0] // Delete exclui valores. Excluí o valor do índice 0
console.log(valores)

console.log(typeof valores)