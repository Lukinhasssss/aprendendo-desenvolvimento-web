const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src() // Não é preciso informar o src pois a partir do tsProject ele já vai saber do que vai precisar e qual pasta que está os arquivos
        .pipe(tsProject())
        .pipe((gulp.dest('build')))
}

exports.default = series(transformacaoTS)