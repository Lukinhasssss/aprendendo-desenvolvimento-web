import React/*, { Fragment }*/ from 'react'

export default props => [
    <h1 key="h1">Bom dia {props.nome}!</h1>,
    <h2 key="h2">Até breve!</h2>
]




// export default props => <h1>Bom dia {props.nome}! Qual sua idade ? {props.idade}</h1>
// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>

//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

//     <Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </Fragment>
// OBS: A MELHOR OPÇÃO É USAR UMA DIV MAS CASO SEJA PRECISO USAR OUTRA OPÇÃO É MELHOR USAR O FRAGMENT