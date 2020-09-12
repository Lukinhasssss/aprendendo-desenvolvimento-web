// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
    // console.log(b) --> Neste caso dará erro
console.log('-------------------------')

// Template String
const produto = 'iPad'
console.log(`${produto}
é
caro!`)
console.log('-------------------------')

// Destructuring --> É a forma de tirar algo de dentro de uma estrutura, por exemplo, objeto, array, String
const [l, e, ...tras] = "Cod3r" // Desestruturando String
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] // Desestruturando array
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 } // Desestruturando objeto.  OBS - idade: i --> renomeia idade para i
console.log(i, nome)