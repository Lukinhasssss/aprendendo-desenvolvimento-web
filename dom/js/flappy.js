function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) { /* Função que vai criar uma barreira */
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda) // Se for uma barreira reversa primeiro eu aplico o corpo e se for uma barreira normal primeiro eu aplico a borda
    this.elemento.appendChild(reversa ? borda : corpo)

    // Criando um método para alterar a altura da barreira
    this.setAltura = altura => corpo.style.height = `${altura}px`
}

                            /*    TESTANDO O CÓDIGO PARA SABER SE ESTÁ FUNCIONANDO    */
                            //const b = new Barreira(true) // Ou seja, será uma barreira reversa
                            //b.setAltura(200)
                            //document.querySelector('[wm-flappy]').appendChild(b.elemento)


function ParDeBarreiras(altura, abertura, x) { // Abertura = abertura entre uma barreira e outra | x = posição 'x' que você quer colocar esse par de barreiras
    this.elemento = novoElemento('div', 'par-de-barreiras') //this.elemento representa a div

    this.superior = new Barreira(true) // reverse == true, ou seja, a barreira superior vai começar com o corpo e depois vai vir a borda
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    // Criando função para sortear o tamanho das aberturas (altura das colunas) e dar dificuldade ao jogo
    // OBS IMPORTANTE!!! --> Quando se coloca this.alguma coisa dentro de uma função construtora, aquele atributo passa a ser visível fora da função
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura) // Math.random vai de 0 - 1
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px` // getX junto do setX define a posição que a barreira irá aparecer
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

                            /*    TESTANDO O CÓDIGO PARA SABER SE ESTÁ FUNCIONANDO    */
                            // const b = new ParDeBarreiras(700, 200, 400)
                            // document.querySelector('[wm-flappy]').appendChild(b.elemento)


function Barreiras(altura, largura, abertura, espaco, notificarPonto) { // abertura = espaço em que o pássaro passará no meio | espaco = espaço entre as barreiras
    // OBS: notificarPonto será disparado quando determinada barreira passar (cruzar) pelo meio do jogo
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura), // O primeiro posicionamento da barreira será fora do jogo
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3 // De quantos em quantos pixels será deslocada a barreira
    this.animar = () => {
        this.pares.forEach(par => { // Vai passar por cada um dos pares de barreiras do jogo
            par.setX(par.getX() - deslocamento) // par.setX vai receber o x atual - deslocamento setando para o x novo

            // Como calcular quando o elemento sair do jogo ???
            if (par.getX() < -par.getLargura()) { // O x é igual a zero no momento que ele chega na quina (esquerda) do jogo, pq neste caso o x é o left
                par.setX(par.getX() + espaco * this.pares.length) // this.pares.length == quantidade de elementos no array | Com esse cálculo a barreira vai para o final do jogo
                par.sortearAbertura() // Para sortear uma nova abertura e a barreira não ficar se repetindo várias vezes
            }

            // Calculando quando a barreira chegou no meio para notificar o ponto
            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio // Se o x do par + deslocamento que eu acabei de dar for >= meio
                && par.getX() < meio // E a posição x sem o deslocamento for < meio | Significa que acabou de cruzar o meio
            // Se cruzou o meio é preciso notificar o usuário
            if (cruzouOMeio) notificarPonto() // Se a variável for verdadeira vai executar a 2ª parte e notificar o ponto
        })
    }
}

function Passaro(alturaJogo) { // O pássaro precisa ter uma noção da altura do jogo, para ele saber exatamente até onde ele pode ir
    let voando = false // Quando o usuário precionar qualquer tecla no teclado ele seta voando pra true (voando = true) e ele começa a subir e se o usuário solta a tecla ele começa a cair

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]) // Para saber em qual posição (altura) o pássaro está voando
    this.setY = y => this.elemento.style.bottom = `${y}px` // Seta a altura em que o pássaro está

    window.onkeydown = e => voando = true // onkeydown significa: quando a tecla estiver pressionada
    window.onkeyup = e => voando = false

    this.animar = () => { // Manipula a altura do pássaro para ter a sensação de que está voando
        const novoY = this.getY() + (voando ? 8 : -6) // Se estiver voando vai somar 8 e se não estiver voando vai subtrair 5
        const alturaMaxima = alturaJogo - this.elemento.clientHeight // altura do jogo - altura do pássaro | Para o pássaro não ultrapassar a altura máxima do jogo

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}

                            /*    TESTANDO O CÓDIGO PARA SABER SE ESTÁ FUNCIONANDO    */
                            // const barreiras = new Barreiras(700, 1200, 200, 400) // (altura, largura, abertura, espaco)
                            // const passaro = new Passaro(700)
                            // const areaDoJogo = document.querySelector('[wm-flappy]')

                            // areaDoJogo.appendChild(passaro.elemento)
                            // barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento)) // Para cada par que tenha uma parte superior e uma parte inferior, eu vou adicioná-la dentro da área do jogo
                            // Chamando a função 'animar' dentro de um temporizador para ver de fato se está tudo funcionando
                            // setInterval(() => {
                            //     barreiras.animar()
                            //     passaro.animar()
                            // }, 20)


function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos // Coloca os pontos dentro do elemento utilizando a propriedade innerHTML
    }
    this.atualizarPontos(0) // Inicialmente eu coloco os pontos para ser 0 (zero)
}

// const barreiras = new Barreiras(700, 1200, 200, 400) // (altura, largura, abertura, espaco)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.elemento)
// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento)) // Para cada par que tenha uma parte superior e uma parte inferior, eu vou adicioná-la dentro da área do jogo
// Chamando a função 'animar' dentro de um temporizador para ver de fato se está tudo funcionando
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)


function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect() // Pega o retângulo associado ao elementoA
    const b = elementoB.getBoundingClientRect() // Pega o retângulo associado ao elementoB

    // Criando expressão para saber se há ou não sobreposição horizontal
    const horizontal = a.left + a.width >= b.left // if (lado direito de A (a.left + a.width) for >= lado esquerdo de B(b.left) --> Haverá colisão
        && b.left + b.width >= a.left // && if lado direito de B (b.left + b.width)  >= lado esquerdo de A (a.left) --> Haverá colisão

    // Criando expressão para saber se há ou não sobreposição vertical
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top

    return horizontal && vertical
}

function colidiu(passaro, barreiras) { // Método para saber se o pássaro colidiu com alguma das barreiras
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function FlappyBird() { // FUNÇÃO QUE DE FATO VAI REPRESENTAR O JOGO
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

        // CRIANDO OS ELEMENTOS (Por enquanto não adiciona nada na tela)
    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,  // 200 == abertura, 400 == espaco
        () => progresso.atualizarPontos(++pontos)) // arrow function que notifica o ponto
    const passaro = new Passaro(altura)

        // ADICIONANDO OS ELEMENTOS NA TELA
    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento)) // Para cada par eu vou adicionar ele dentro do jogo

    this.start = () => { // Quando eu chamar essa função vai iniciar o jogo
        // Loop do jogo
        const temporizador = setInterval(() => { // Essa const está sendo criada para quando ouver uma colisão poder parar o temporizador para o jogo pausar pq o usuário perdeu
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
                window.location.reload()
            }
        }, 20)
    }
}

new FlappyBird().start() // VERSÃO FINAL DO JOGO (SEM COLISÃO)