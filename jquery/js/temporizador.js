(function ($) { // Isto é uma função auto invocada
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({ // .extends --> recebe um objeto que seria todos os valores padrões e o 2º parâmetro seria o objeto recebido como parâmetro
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora,
            minutoDezena, minutoUnidade, separadorMinuto,
            segundoDezena, segundoUnidade, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/) // O formato em que as horas serão capturadas
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        // console.log(horarioAlvo)

        let temporizador = setInterval(() => {
            const agora = new Date() // Para pegar a hora atual
            const alvo = new Date() // Para pegar a hora alvo
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMilissegundos = alvo.getTime() - agora.getTime()
            if (diferencaEmMilissegundos >= 0) {
                const diferenca = regex.exec(new Date(diferencaEmMilissegundos).toISOString()) // toISOString é a quantidade de horas que eu quero mostrar no meu temporizador
                console.log(diferenca)

                horaDezena.html(diferenca[1][0]) // diferenca[1] pega a hora e [0] pega o primeiro caractere da hora (dezena)
                horaUnidade.html(diferenca[1][1]) // diferenca[1] pega a hora e [1] pega o segundo caractere da hora (unidade)
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            } else {
                clearIntervaltemporizador() // Limpa o temporizador pois a hora ja chegou
            }
        }, 1000)

        return this
    }
})(jQuery)