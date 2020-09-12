module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(word => word.toLowerCase())
                .map(word => word.replace('"', ''))

            resolver(words)
        } catch (e) {
            reject(e)
        }
    })
}

function filterValidRow() {
    const notNumber = !parseInt(row.trim()) // trim remove espaços em branco
    const notEmpty = !!row.trim()
    const notInterval = !row.includes('-->')
    return notNumber && notEmpty && notInterval // Significa que eu tenho uma validRow
}

const removePunctuation = row => row.replace(/[,?!.-]/g, '') // Substitui ,?!. e - por '' (espaço em branco)
const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim() // OBS: i --> para ignorar letra maiúscula e minúscula | g --> para substituir de forma global
const mergeRows = (fullText, row) => `${fullText} ${row}` // No final terei um grande texto com todas as palavras da minha legenda

// OBSERVAÇÕES IMPORTANTES:
        // .reduce --> Para transformar um array em um texto
        // .filter --> Para transformar um array em outro array filtrando dados
        // .map --> Para transformar um array em outro array com a mesma quantidade de elementos
        // O .reduce é o mais flexível, ele pode transformar um array em outro array, array em objeto, array para string...