class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // Esse é um jeito de definir que uma classe tem outra classe como protótipo. Nesse exemplo, Pai extende Avo, ou seja, Pai tem como protótipo o Avo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // Chama a função construtora da superclasse. Neste exemplo a superclasse de Pai é Avo. Chama o construtor de Avo para que ele set o this.sobrenome
        this.profissao = profissao
    }
}

class Filho extends Pai { // Filho extends Pai que extends Avo, ou seja, Filho tem como protótipo Pai que tem como protótipo Avo que é a SuperClasse
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)