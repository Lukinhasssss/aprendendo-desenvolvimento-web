function Carro(velocidadeMaxima = 200, delta = 5) { // O delta serve para quando acelerar, ou seja, acelera de delta em delta
    let velocidadeAtual = 0 // Pertence apenas a função 'Carro'. Quando for instanciar o objeto não tem como acessar diretamente objeto.velocidadeAtual
    // let velocidadeAtual = 0 é um atributo privado, ou seja, pertence somente ao escopo dessa função

    // Método público
    this.acelerar = function () { // Essa função é responsável por acrescentar a velocidade atual
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método público
    this.getVelocidadeAtual = function () { // Para deixar o método privado é só fazer, por exemplo: let getVelocidadeAtual = function () { return velocidadeAtual }
        return velocidadeAtual
    }
//OBS: Para transformar algo em público usa-se o this, que é responsável por tornar algo visível para fora desta função
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) // A velocidade máxima ao invés de ser 200 vai ser 350 e o delta ao invés de ser 5 vai ser 20
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) // Como a função foi chamada 3x então o resultado será 60

console.log(typeof Carro) // Carro é como se fosse uma função
console.log(typeof ferrari) // E ferrari é como se fosse um objeto dessa função