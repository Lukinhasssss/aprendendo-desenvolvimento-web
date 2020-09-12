const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // OBS: axios --> Cliente http que faz requisições para obter informações de algo que está remoto

const chineses = funcionario => funcionario.pais === 'China' // f -> funcionarios
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual // Se funcionario.salario < funcionarioAtual retorne funcionario senão retorne funcionarioAtual
}

axios.get(url).then(response => { // OBS: .get() --> Obtém uma informação do servidor
    const funcionarios = response.data
        //console.log(funcionarios)

    // Desafio: Mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func)
})