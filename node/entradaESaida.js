const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // O evento on('data') vai acontecer quando você digitar alguma coisa e apertar o enter. Ele vai chamar uma função passando aquilo que você digitou dentro da variável data
        const nome = data.toString().replace('\n', '') // OBS: ('\n', '') ==> Substitui o \n pelo espaço vazio para remover o espaço vazio que o usuário digitou
        process.stdout.write(`Fala ${nome}!!\n`) // stdout == console.log
        process.exit()
    })
}