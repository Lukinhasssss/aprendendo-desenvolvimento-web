// Função factory(fábrica) é uma função que retorna um objeto

// Factory Simples
function criarPessoa() {
    return {
        nome: 'Lucas',
        sobrenome: 'Monteiro'
    }
}

console.log(criarPessoa())