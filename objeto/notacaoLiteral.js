const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c} // Antigamente era assim que se atribuía uma variável em um objeto
const obj2 = { a, b, c } // Automáticamente ele vai receber o nome do atributo da constante que já foi declarada
// A notação de cima (obj1) permite que você mude o nome do atributo
console.log(obj1, obj2)
console.log('------------------')

const nomeAtributo = 'Nota'
const valorAtributo = 7.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)
console.log('------------------')

const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2() {
        // ...
    }
}

console.log(obj5)