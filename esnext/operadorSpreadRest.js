// Operador == ... OBS: rest(juntar) / spread(espalhar)
// Usar rest com parâmetro de função

// Usando spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // Obs: Spread pega todos os atributos de um objeto e coloca dentro de outro objeto
console.log(clone)
console.log('-------------------------------------------------')

// Usando spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)