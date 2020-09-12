// Middleware Pattern (Chain of Responsability)
const passo1 = (ctx, next) => {
    // ctx == contexto --> objeto que será passado de um passo para outro, ou seja, de um middleware para outro
    // next --> Quando chamada dispara o próximo passo da cadeia
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    // A função exec recebe um contexto(ctx) e um conjunto de middlewaes
    const execPasso = indice => {
        // execPasso --> executa o passo de índice[i]. Exemplo: executa o middleware de índice [0]
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)