const escola = "Cod3r"

console.log(escola.charAt(4)) // PEGA O CARACTER PELO ÍNDICE
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // PEGA O CARACTER NA TABELA ASCII
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // VAI DO ÍNDICE 1 ATÉ O FINAL
console.log(escola.substring(0, 3)) // VAI DO ÍNDICE 0 ATÉ O ÍNDICE 3, SEM CONTAR O ÍNDICE 3

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!') // FAZ A MESMA COISA QUE O CÓDIGO DE CIMA
console.log(escola.replace(3, 'e')) // PEGA O NÚMERO 3 DENTRO DE "Cod3r" E SUBSTITUI PELA LETRA 'e'
console.log(escola.replace(/\d/, 'e')) // SUBSTITUI TODOS OS NÚMEROS PELA LETRA 'e'
console.log(escola.replace(/\w/g, 'e')) // SUBSTITUI TODOS OS DÍGITOS PELA LETRA 'e'

console.log('Ana,Maria,Pedro'.split(','))