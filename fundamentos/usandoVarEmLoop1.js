// O 'for' tem três partes. 1ª Declaração de uma variável. 2ª A codição para repetir o bloco. 3ª O incremento.
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i = ', i) // Como o 'i' não tem escopo de bloco ele fica disponível fora do laço 'for'.