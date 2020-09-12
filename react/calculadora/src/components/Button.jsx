import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
        onClick={event => props.click && props.click(props.label)}
        className={classes}>
            {props.label}
        </button>
    )
}





// TAMBÉM PODE SER FEITO DESSA FORMA
// export default props =>
//     <button className={`
//         button
//         ${props.operation ? 'operation' : '' }
//         ${props.double ? 'double' : '' }
//         ${props.triple ? 'triple' : '' }
//     `}>
//         {props.label}
//     </button>




//${props.operation ? 'operation' : '' } --> Significa que se props.operation estiver ativa atribua o nome operation para a classe, caso contrário atribua '' (vazio)
