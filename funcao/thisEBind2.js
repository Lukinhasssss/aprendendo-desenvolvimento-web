function Pessoa() {
    this.idade = 0

    const self = this // Depois de definir essa constante é só substituir o this pelo nome da constante
    setInterval(function() { // Esse intervalo representa que a cada x milissegundos essa função vai ser disparada
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // Esse intervalo é passado em milissegundos. Obs: 1000ms == 1s.
} // OBS: O bind deve ser passado "fora" da função.

new Pessoa