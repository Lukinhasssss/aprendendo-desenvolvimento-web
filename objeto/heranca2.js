// Cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = '0' // É aconselhável que não faça isso
const avo = { atributo1: 'A' }
const pai = { __proto__: avo, atributo2: 'B', atributo3: '3' } // Pai tem como protótipo o avô.
const filho = { __proto__: pai, atributo3: 'C'} // Filho tem como protótipo o pai.
console.log(filho.atributo0) // Caso ele não tenha o atributo1 ele irá procurar o atributo em quem estiver mais 'acima' e caso não haja ele retorna undefined
console.log(filho.atributo1, filho.atributo2, filho.atributo3)

console.log('-------------------------------------------------------')

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }                                                           // OBS: 'this' REFERENCIA O OBJETO ATUAL
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing: Vai sombrear o atributo velMax do Objeto carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// Estabelecendo relação de protótipo (Herança)
Object.setPrototypeOf(ferrari, carro) // ferrari tem carro como seu protótipo, ou seja, ferrari herda as características de carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())