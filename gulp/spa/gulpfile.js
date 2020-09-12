const { series,parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app') // Importa as funções do arquivo app.js
const { depsCSS,depsFonts } = require('./gulpTasks/deps') // Importa as funções do arquivo deps.js
const { monitorarArquivos,servidor } = require('./gulpTasks/servidor') // Importa as funções do arquivo servidor.js

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)