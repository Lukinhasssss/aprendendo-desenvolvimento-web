const gulp = require('gulp')
const webserver = require('gulp-webserver') // Importa o gulp-webserver
const watch = require('gulp-watch') // Para monitorar os arquivos e sempre que ouver uma mudança em determinados tipos de arquivos ele vai chamar uma das tasks

function servidor() {
    return gulp.src('build') // O servidor vai ficar 'olhando' para a pasta build
        .pipe(webserver({ // Recebe como parâmetro um objeto com as configurações do servidor
            port: 8080,
            open: true, // Se eu quero que ele abra o browser
            livereload: true, // Para atualizar a página automaticamente
        }))
}

function monitorarArquivos(cb) {
    // Eu quero monitorar a pasta onde está o meu código fonte, ou seja, eu vou mudar o código fonte e ele vai disparar um build que vai gerar a minha aplicação
    watch('src/**/*.html', () => gulp.series('appHTML')()) // Ou seja, quando um arquivo .html mudar vai chamar uma arrow function que vai chamar a task appHTML
    watch('src/**/*.scss', () => gulp.series('appCSS')()) // Ou seja, quando um arquivo .scss mudar vai chamar uma arrow function que vai chamar a task appCSS
    watch('src/**/*.js', () => gulp.series('appJS')()) // Ou seja, quando um arquivo .js mudar vai chamar uma arrow function que vai chamar a task appJS
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')()) // Ou seja, quando um arquivo de imagem mudar vai chamar uma arrow function que vai chamar a task appIMG

    return cb()
}

module.exports = {
    servidor,
    monitorarArquivos
}