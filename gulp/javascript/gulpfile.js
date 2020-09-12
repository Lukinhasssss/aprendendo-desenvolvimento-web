const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callback) {
    return gulp.src('src/**/*.js')
        // Essa primeira transformação vai pegar o código e converte-lo para um código mais compatível com o browser
        .pipe(babel({ // OBS: babel recebe um objeto de configuração para configurar o babel
            comments: false, // Ou seja, não quero que os arquivos de comentários sejam transferidos para o arquivo final | Não terá comentários
            presets: ["env"] // Esse presets: ["env"] é o preset que vai pegar o javascript mais novo possível
        }))
        .pipe(uglify()) // Vai pegar todo o código e converte-lo para ser minificado retirando, por exemplo, espaços em branco
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) // Vai pegar todos os arquivos selecionados que já foram 'transpilados' usando babel e que já foram minimizados e irá concatenálos
        .pipe(gulp.dest('build')) // Diz qual é o destino que eu vou usar | build seria a pasta onde eu tenho o código compilado

    // return callback()
}

function fim(callback) {
    console.log('Terminou!!!')
    return callback()
}

exports.default = series(transformacaoJS, fim)