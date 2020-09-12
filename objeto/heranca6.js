function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123) // new ==> Cria um novo objeto e o prototype desse objeto aponta para a função Aula.prototype
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)
console.log('---------------------------------------------------------------------------------')

// Criando uma função que vai simular o operador new
function novo(f, ...params) { // Recebe a função construtora e um conjunto de parâmetros que você quer passar para a criação do seu objeto
    const obj = {}
    obj.__proto__ = f.prototype// Fazendo com que o protótipo que eu acabei de criar aponte para a função .prototype
    f.apply(obj, params);// O primeiro parâmetro vai ser o objeto que você acabou de criar e o segundo parâmetro vai ser um array que representa a lista de parâmetros que eu quero aplicar na função f
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)