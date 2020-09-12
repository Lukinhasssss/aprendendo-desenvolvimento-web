function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 })) // Por padrão max = 1000
console.log(rand({})) // Fica entre 0 e 1000
console.log(rand()) // Neste caso da erro, pois você estará tentando desestruturar elementos de algo que é nulo