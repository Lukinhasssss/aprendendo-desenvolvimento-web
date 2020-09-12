function area(width, height) {
    const area = width * height
    if (area > 20) {
        console.log('Valor acima do permitido: ' + area + 'm2.')
        console.log(`Valor acima do permitido: ${area}m2.`) // Essa parece ser a melhor forma de imprimir na tela.
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 14, 22, 44))
console.log(area(7, 3))