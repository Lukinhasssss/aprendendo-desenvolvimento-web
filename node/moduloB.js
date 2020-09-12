// Esta é a forma mais comum de exportar modulos node CommonJS.
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa Noite'
    }
}

/*
 * Exportando modulo ES6:
 *
 * export const bomDia = 'Bom dia'
 * export function boaNoite() {
 *    return 'Boa Noite'
 * }

 */