const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 2', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds()) // new Date().getSeconds ==> Mostra os segundos
})

setTimeout(function() { // setTimeout ==> Temporizador padrão do JS
        tarefa1.cancel() // Essa é uma forma de cancelar um temporizador criado a partir do scheduleJob()
        console.log('Cancelando Tarefa 1')
    }, 20000) // Vai executar o cancelamento depois de 20 segundos

// Criando tarefa de uma forma diferente
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // Vai executar de 1 (Segunda) à 5 (Sexta) Obs: Domingo == 0
regra.hour = 16 // Na hora 12
regra.second = 30 // No segundo 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

// setInterval --> Dispara uma função de tempos em tempos
// setImmediate --> É como se fosse o setTimeout com o valor zerado