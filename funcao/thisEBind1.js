const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: Funcional o OO(Orientado a Objetos)

const falarDePessoa = pessoa.falar.bind(pessoa)// O bind() você passa um objeto no qual você quer que seja resolvido o this
                                               // Ou seja, sempre a partir dessa função será resolvido o 'this'.
falarDePessoa() 