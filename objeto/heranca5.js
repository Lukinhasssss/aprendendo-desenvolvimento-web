console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
console.log('---------------------')

String.prototype.reverse = function() {
    return this.split('').reverse().join('') // reverse --> reverte a string    join --> junta novamente a string
}

console.log('Escola Cod3r'.reverse()) // Esse método não tem na API mas como foi definido na String.prototype então ele agora pode ser usado
console.log('---------------------')

Array.prototype.first = function() { // Retorna o primeiro elemento do array
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())
console.log('---------------------')

String.prototype.toString = function() {
    return 'Lascou tudo'                // NUNCA SUBSTITUA COMPORTAMENTOS QUE JÁ EXISTAM 
}

console.log('Escola Cod3r'.reverse())