const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('src/**/*.html') // Pega todos os arquivos html
        .pipe(htmlmin({ collapseWhitespace: true })) // htmlmin: minifica todos os html's e collapseWhitespace: serve para tirar espaços em branco
        .pipe(gulp.dest('build')) // Copia todos html's para a pasta seleciona e inclusive copia a pasta 'paginas' que tem html's dentro dela
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss') // Pega o arquivo index.scss que contém dentro dele o import para todos os outros arquivos .scss
        .pipe(sass().on('error', sass.logError)) // Pega o arquivo .sass selecionado e o converte para css
        .pipe(uglifycss({ "uglyComments": true })) // Deixa os arquivos selecionados minificados | "uglyComments": true --> Para ficar sem comentários no arquivo final
        .pipe(concat('app.min.css')) // Para concatenar todos os arquivos em um só
        .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js') // Pega todos os arquivos .js da pasta js e de suas subpastas se ouver
        .pipe(babel({ presets: ['ENV'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

// Registrando uma task para ela poder ser re-usada
gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}
// Essas 4 funções serão exportadas a partir desse arquivo