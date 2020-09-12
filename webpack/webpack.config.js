// webpack.config.js é um arquivo que será interpretado pelo node então eu uso o sistema de módulos do node (commons js)

const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = { // module.exports recebe um objeto que representa a configuração do meu webpack
    mode: modoDev ? 'development' : 'production', // if modoDev == true, modoDev = 'development' | else modoDev = 'production'
    entry: './src/principal.js',
    output: {
        filename: 'principal.js', // Nome do arquivo de saída
        path: __dirname + '/public' // Pasta de destino onde eu quero salvar os arquivos gerados | Obs: __dirname aponta para a pasta raiz, que neste caso é a pasta webpack
    },
    devServer: {
        contentBase: "./public",
        port: 3000
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // Extrai o css para fora, para um arquivo externo
            filename: "estilo.css" // filename define o nome do arquivo
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {
        rules: [{
            // test: /\.css$/, // Para ler um arquivo .css
            test: /\.s?[ac]ss$/, // Essa expressão encontra 3 tipos de arquivos: .css .scss .sass
            use: [
                MiniCssExtractPlugin.loader, // Esse plugin é conflitante com o plugin de baixo ('style-loader')
                // 'style-loader', // Responsável por adicionar (jogar) o CSS a DOM injetando a tag <style>, ou seja, vai adicionar CSS's ao JS
                'css-loader', // É responsável por interpretar os @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}