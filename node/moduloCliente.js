// Importando modulo CommonJS:

const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)
console.log('-------------------------------')

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)


/*
 * Importando modulo ES6:
 * import moduloA, { ola, bemVindo, ateLogo } from './moduloA'
 * import moduloB, { bomDia, boaNoite } from './moduloB'
 *
 * console.log(ola)
 * console.log(bemVindo)
 * console.log(ateLogo)
 * console.log(moduloA)
 * console.log('-------------------------------')

 * console.log(bomDia)
 * console.log(boaNoite())
 * console.log(moduloB)
 */