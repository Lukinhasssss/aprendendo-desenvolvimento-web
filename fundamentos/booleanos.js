let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('\nos verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log('texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('\nos falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null) // Nulo
console.log(!!NaN) // Not a number
console.log(!!undefined)
console.log(!!(isAtive = false))

console.log('\npra finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(('' || null || 0 || 'olá')) // Retorna o único valor verdadeiro que encontrou

let nome = 'Lucas'

console.log(nome || 'Desconhecido')