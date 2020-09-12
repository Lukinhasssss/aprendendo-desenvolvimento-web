let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
// OBS: DENTRO DO ESCOPO DE UMA FUNÇÃO DEVEMOS TOMAR CUIDADO AO CHAMAR A THIS, POIS O THIS DENTRO DO ESCOPO DE UMA FUNÇÃO É GLOBAL

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // AGORA DEU FALSO PORQUE A FUNÇÃO BIND FAZ COM QUE O THIS FIQUE ASSOCIADO SOMENTE A UMA FUNÇÃO. NO EXEMPLO ACIMA O THIS FICOU ASSOCIADO À OBJ
comparaComThis(obj)

console.log('\n--------------------\n')

// FAZENDO O MESMO EXEMPLO AGORA UTILIZANDO UMA ARROW FUNCTION
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // (this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) // CONTINUA APONTANDO PARA O OBJETO NO QUAL FOI DEFINIDO, OU SEJA, ARROWFUNCTION TEM PRIORIDADE EM  RELAÇÃO AO BIND