const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss') // Não é preciso importar todos os arquivos pois no index.sass já tem o import para todos os arquivos necessários
        .pipe(sass().on('error', sass.logError)) // Já vai pegar todo o sass e converter para css
        .pipe(uglifycss({ "ugliComments": true })) // uglify deixa o arquivo minificado
        .pipe(concat('estilo.min.css')) // Recebe como parâmetro o nome do arquivo que eu quero gerar no final, que é o mesmo nome que estou esperando no index.html
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/index.html') // Escolhe o arquivo (ou arquivos) para fazer alguma ação com ele(s)
        .pipe(gulp.dest('build')) // copia o arquivo index.html que está na pasta src e o copia para build/css
}

exports.default = parallel(transformacaoCSS, copiarHTML)