const gulp = require('gulp') // Importa o gulp
const { series, parallel } = require('gulp') // Para fazer várias tarefas(tasks) em série, ou seja, uma depois da outra | ou parellel para executar em paralelo
// const series = gulp.series // Faz a mesma coisa que a linha 2

const antes1 = cb => { // OBSERVAÇÃO!!! Cada função representa uma task
    console.log('Tarefa Antes 1!!!')
    return cb()
}

const antes2 = cb => { // OBSERVAÇÃO!!! Cada função representa uma task
    console.log('Tarefa Antes 2!!!')
    return cb()
}

function copiar(cb) { // cb --> callback
    // Essa callback precisa ser chamada quando você terminar de executar uma tarefa para o gulp saber que determinada tarefa foi finalizada

    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // Serve para você selecionar quais arquivos você vai usar como insumo (entrada) para o workflow que você vai definir dentro do arquivo

    gulp.src('pastaA/**/*.txt') // Significa que qualquer arquivo que esteja dentro da pastaA com e que tenha a extensão .txt será copiado para a pastaB
        .pipe(gulp.dest('pastaB')) // Coloca o conteúdo dentro da pastaB, que não existe mas ele vai acabar criando automaticamente
        /* .pipe --> Serve pra você fazer/aplicar transformações nos arquivos que você definiu como sendo os arquivos de entrada para o seu workflow
        .pipe(imagemPelaMetade)
        .pipe(imagemEmPretoEBranco)
        .pipe(transformacaoA)
        .pipe(transformacaoB)
        .pipe(transformacaoC) */
    return cb()
}

const fim = cb => { // OBSERVAÇÃO!!! Cada função representa uma task
    console.log('Tarefa Fim!!!')
    return cb()
}

// Isso não é suficiente e nesse arquivo gulpfile é preciso exportar alguma coisa para que seja executado
// Além disso, o gulp espera receber uma task(tarefa) chamada default
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)