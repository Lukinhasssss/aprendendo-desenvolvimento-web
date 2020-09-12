function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // resolve == Função que será chamada quando a promessa for atendida | reject == Quando você quer rejeitar o atendimento dessa promessa
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // Para tratar no caso de erro